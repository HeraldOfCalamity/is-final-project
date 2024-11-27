import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Client, CLIENT_FIELDS } from "../../classes/Client";
import { Delete, Edit } from "@mui/icons-material";
import { useRef, useState } from "react";

interface ClientTableProps {
  clients: Client[];
  onDelete: (clientId: string) => void;
  onEdit: (updatedClient: Client) => void;
}

const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  onDelete,
  onEdit,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const maxClientsPerPage = 5;

  const totalPages = Math.ceil(clients.length / maxClientsPerPage);
  const dialogContainerRef = useRef<HTMLDivElement>(null);

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

  const handleDeleteClick = (client: Client) => {
    setSelectedClient(client);
    setDeleteDialogOpen(true);
  };

  const confirmDeletion = () => {
    if (selectedClient) {
      onDelete(selectedClient.id);
      setDeleteDialogOpen(false);
    }
  };

  const handleEditClick = (client: Client) => {
    setSelectedClient(client);
    setShowEditForm(true);
  };

  const handleEditSubmit = () => {
    if (selectedClient) {
      onEdit(selectedClient);
      setShowEditForm(false);
    }
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
                    <IconButton onClick={() => handleDeleteClick(client)}>
                      <Delete color="error" />
                    </IconButton>
                    <IconButton onClick={() => handleEditClick(client)}>
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

      {/* Edit Form */}
      {showEditForm && selectedClient && (
        <Box
          sx={{
            position: "fixed",
            bottom: 50,
            right: 50,
            background: "white",
            padding: 2,
          }}
        >
          <TextField
            label="Name"
            value={selectedClient.name}
            onChange={(e) =>
              setSelectedClient({ ...selectedClient, name: e.target.value })
            }
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditSubmit}
          >
            Save
          </Button>
        </Box>
      )}

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        TransitionProps={{
          onExited: () => {
            dialogContainerRef.current?.focus();
          },
        }}
      >
        <DialogTitle>Confirm Client Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete client "{selectedClient?.name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDeletion} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <div ref={dialogContainerRef} tabIndex={-1} style={{ outline: "none" }} />
    </>
  );
};

export default ClientTable;
