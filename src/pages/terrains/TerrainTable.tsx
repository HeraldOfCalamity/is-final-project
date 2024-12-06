import {
  List,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Terrain } from "../../classes/Terrain";
import { PinDrop } from "@mui/icons-material";

interface TerrainTableProps {
  terrains: Terrain[];
}

const TerrainTable: React.FC<TerrainTableProps> = ({ terrains }) => {
  const formFields = [
    { fieldName: "id", disabled: false },
    { fieldName: "name", disabled: false },
    { fieldName: "lat", disabled: false },
    { fieldName: "lng", disabled: false },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {formFields.map((field) => (
              <TableCell align="center" key={"th_" + field.fieldName}>
                {field.fieldName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {terrains.map((terrain) => (
            <TableRow key={"tr_" + terrain.id + terrain.name}>
              <TableCell align="center">{terrain.id}</TableCell>
              <TableCell align="center">{terrain.name}</TableCell>
              <TableCell align="center">
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                  }}
                >
                  {terrain.shape.map((point) => (
                    <ListItemIcon>
                      <PinDrop />
                      <ListItemText key={point[0]}>{point[0]}</ListItemText>
                    </ListItemIcon>
                  ))}
                </List>
              </TableCell>
              <TableCell align="center">
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                  }}
                >
                  {terrain.shape.map((point) => (
                    <ListItemIcon>
                      <PinDrop />
                      <ListItemText key={point[1]}>{point[1]}</ListItemText>
                    </ListItemIcon>
                  ))}
                </List>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TerrainTable;
