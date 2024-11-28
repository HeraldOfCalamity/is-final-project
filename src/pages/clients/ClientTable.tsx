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
} from "@mui/material";
import { Client, ClientFormField } from "../../classes/Client";
import { Delete, Edit } from "@mui/icons-material";
import { useRef, useState } from "react";
import ClientForm from "./ClientForm";

interface ClientTableProps {
  clients: Client[];
  clientFields: ClientFormField[];
  onDelete: (clientId: string) => void;
  onEdit: (updatedClient: Client) => void;
}

const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  onDelete,
  clientFields,
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
    setCurrentPage(page);
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

  const handleEditFormClose = () => {
    setShowEditForm(false);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {clientFields.map((field) => (
                <TableCell
                  key={"h_" + field.fieldName}
                  align="center"
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {field.fieldName[0].toUpperCase() + field.fieldName.slice(1)}
                </TableCell>
              ))}
              <TableCell align="center">Tools</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getPaginatedClients().map((client) => (
              <TableRow key={"tr_" + client.id}>
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
        <ClientForm
          clientFields={clientFields}
          formTitle="Edit Client"
          handleCancel={handleEditFormClose}
          handleFormSubmit={handleEditSubmit}
          initialClientValue={selectedClient}
          sx={{
            position: "fixed",
            bottom: 100,
            right: 100,
            background: "white",
            padding: 2,
          }}
        />
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
