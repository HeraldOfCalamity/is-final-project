import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Client, CLIENT_FIELDS } from "../../classes/Client";

interface ClientFormProps {
  formTitle: string;
}

const ClientForm: React.FC<ClientFormProps> = ({ formTitle }) => {
  const [client, setClient] = useState<Client>({
    id: "",
    name: "",
    lastname: "",
    username: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
    console.log(client);
  };

  const handleFormSubmit = () => {
    console.log(client);
  };

  const getClientValueFromField = (field: string) => {
    const entry = Object.entries(client).find((pair) => pair[0] === field);
    let value = "";
    if (entry) {
      value = entry[1];
    }

    return value;
  };

  return (
    <Paper
      sx={{
        p: 5,
      }}
    >
      <Typography variant="h6">{formTitle}</Typography>
      <Box
        component={"form"}
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {CLIENT_FIELDS.map((field) => (
          <TextField
            required
            variant="standard"
            label={field[0].toUpperCase() + field.slice(1)}
            name={field}
            value={getClientValueFromField(field)}
            onChange={handleChange}
          />
        ))}
      </Box>
      <Button
        onClick={() => handleFormSubmit()}
        variant="contained"
        sx={{
          mt: 4,
        }}
      >
        Save
      </Button>
    </Paper>
  );
};

export default ClientForm;
