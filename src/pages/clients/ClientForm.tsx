import {
  Box,
  Button,
  Paper,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Client, ClientFormField, NewClientDto } from "../../classes/Client";
import ClickableMap from "../../components/ClickableMap";

interface ClientFormProps {
  formTitle: string;
  handleFormSubmit:
    | Dispatch<SetStateAction<Client>>
    | ((client: Client) => void);
  handleReturn: () => void;
  clientFields: ClientFormField[];
  sx?: SxProps<Theme>;
  client: Client;
  setClient:
    | Dispatch<SetStateAction<Client>>
    | Dispatch<SetStateAction<NewClientDto>>;
}

const ClientForm: React.FC<ClientFormProps> = ({
  formTitle,
  handleFormSubmit,
  handleReturn,
  sx,
  client,
  clientFields,
  setClient,
}) => {
  // const [client, setClient] = useState<Client>(client);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
    console.log(client);
  };

  const handleCoordChange = (coords: [number, number]) => {
    setClient({ ...client, coordenates: coords });
    // client.coordenates = coords;
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
            required={true}
            variant="standard"
            disabled={field.disabled}
            label={field.fieldName[0].toUpperCase() + field.fieldName.slice(1)}
            name={field.fieldName}
            value={getClientValueFromField(field.fieldName)}
            onChange={handleChange}
          />
        ))}
      </Box>
      <Box>
        <ClickableMap
          coords={client.coordenates}
          setCoords={handleCoordChange}
        />
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
          onClick={() => handleReturn()}
          variant="contained"
          color="error"
        >
          Return
        </Button>
      </Box>
    </Paper>
  );
};

export default ClientForm;
