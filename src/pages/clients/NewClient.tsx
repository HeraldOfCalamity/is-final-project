import { useState } from "react";
import { Client, ClientFormField, NewClientDto } from "../../classes/Client";
import { createClient } from "../../services/client-service";
import ClientForm from "./ClientForm";

const newClientFormFields: ClientFormField[] = [
  // { fieldName: "id", disabled: false },
  { fieldName: "username", disabled: false },
  { fieldName: "name", disabled: false },
  { fieldName: "lastname", disabled: false },
  { fieldName: "coordenates", disabled: false },
];

const NewClient: React.FC = () => {
  const [newClient, setNewClient] = useState<NewClientDto>({
    coordenates: [0, 0],
    name: "",
    lastname: "",
    username: "",
  });

  const redirectToClientTable = (): void => {
    window.location.pathname = "/clients";
  };

  const handleNewClient = async (client: Client) => {
    if (!areFieldsValid()) {
      console.log(Object.values(newClient));
      alert("Fill all required fields!");
      return;
    }
    const result = await createClient(client);
    console.log(result);
  };

  const areFieldsValid = (): boolean => {
    const vals = Object.values(newClient);
    return vals.every((v) => v !== "");
  };

  return (
    <ClientForm
      clientFields={newClientFormFields}
      formTitle="Client Registration"
      handleReturn={redirectToClientTable}
      handleFormSubmit={handleNewClient}
      client={{ id: "-1", ...newClient }}
      setClient={setNewClient}
    />
  );
};

export default NewClient;
