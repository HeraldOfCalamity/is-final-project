import {
  Box,
  Button,
  Paper,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Client, ClientFormField } from "../../classes/Client";

interface ClientFormProps {
  formTitle: string;
  handleFormSubmit: (client: Client) => void;
  handleCancel: () => void;
  clientFields: ClientFormField[];
  sx?: SxProps<Theme>;
  initialClientValue: Client;
}

const ClientForm: React.FC<ClientFormProps> = ({
  formTitle,
  handleFormSubmit,
  handleCancel,
  sx,
  initialClientValue,
  clientFields,
}) => {
  const [client, setClient] = useState<Client>(initialClientValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
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
        ...sx,
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
        {clientFields.map((field) => (
          <TextField
            key={"txt_" + field.fieldName}
            required
            variant="standard"
            disabled={field.disabled}
            label={field.fieldName[0].toUpperCase() + field.fieldName.slice(1)}
            name={field.fieldName}
            value={getClientValueFromField(field.fieldName)}
            onChange={handleChange}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button onClick={() => handleFormSubmit(client)} variant="contained">
          Save
        </Button>
        <Button
          onClick={() => handleCancel()}
          variant="contained"
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};

export default ClientForm;
