import {
  Box,
  Button,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Client, CLIENT_FIELDS } from "../../classes/Client";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";

interface ClientTableProps {
  clients: Client[];
}

const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxClientsPerPage = 5;

  const totalPages = Math.ceil(clients.length / maxClientsPerPage);

  const getPaginatedClients = (): Client[] => {
    const startIndex = (currentPage - 1) * maxClientsPerPage;
    const endIndex = startIndex + maxClientsPerPage;

    return clients.slice(startIndex, endIndex);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    console.log("value", page);
    console.log("page", currentPage);
    setCurrentPage(page);
    console.log("value", page);
    console.log("page", currentPage);
  };

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
            {getPaginatedClients().map((client) => (
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
                    <IconButton>
                      <Delete color="error" />
                    </IconButton>
                    <IconButton>
                      <Edit color="success" />
                    </IconButton>
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
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
      />
    </>
  );
};

export default ClientTable;
