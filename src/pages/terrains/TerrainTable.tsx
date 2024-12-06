import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Terrain } from "../../classes/Terrain";

interface TerrainTableProps {
  terrains: Terrain[];
}

const TerrainTable: React.FC<TerrainTableProps> = ({ terrains }) => {
  const formFields = [
    { fieldName: "id", disabled: false },
    { fieldName: "name", disabled: false },
    { fieldName: "point count", disabled: false },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {formFields.map((field) => (
              <TableCell key={"th_" + field.fieldName}>
                {field.fieldName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {terrains.map((terrain) => (
            <TableRow key={"tr_" + terrain.id + terrain.name}>
              <TableCell>{terrain.id}</TableCell>
              <TableCell>{terrain.name}</TableCell>
              <TableCell>{terrain.shape.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TerrainTable;
