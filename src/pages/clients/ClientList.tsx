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
                <TableCell align="center">{client.id}</TableCell>
                <TableCell align="center">{client.username}</TableCell>
                <TableCell align="center">{client.name}</TableCell>
                <TableCell align="center">{client.lastname}</TableCell>
                <TableCell align="center">
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
            <TableRow>
              <TableCell colSpan={5}>
                <Button variant="contained" href="/clients/new" fullWidth>
                  New Client
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>add pagination</Typography>
      <Typography>add plus symbol to create client</Typography>
    </>
  );
};

export default ClientList;
