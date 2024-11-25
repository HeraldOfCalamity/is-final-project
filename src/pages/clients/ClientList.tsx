import { Button, Typography } from "@mui/material";

// interface ClientListProps {}

const ClientList: React.FC = () => {
  return (
    <>
      <Typography>Client List!</Typography>
      <Button variant="contained" href="/clients/new">
        New Client
      </Button>
    </>
  );
};

export default ClientList;
