import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Client, CLIENT_FIELDS } from "../../classes/Client";
import { Delete, Edit } from "@mui/icons-material";

interface ClientListProps {
  clients: Client[];
}

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <>
      <Button variant="contained" href="/clients/new">
        New Client
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {CLIENT_FIELDS.map((field) => (
                <TableCell
                  key={"h_" + field}
                  align="center"
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {field}
                </TableCell>
              ))}
              <TableCell align="center">Tools</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.username}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.lastname}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Delete color="error" sx={{ mr: 2 }} />
                    <Edit color="success" />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>add pagination</Typography>
    </>
  );
};

export default ClientList;
