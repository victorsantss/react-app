import { Fab, Tooltip } from "@mui/material";
import { useEmployeesContext } from "../../app/hooks/useEmployeesContext";
import AddIcon from '@mui/icons-material/Add';

export function NewEmployeeButton() {
  const { openNewEmployeeModal } = useEmployeesContext();

  return (
    <Tooltip title="Adicionar Novo Funcionário">
      <Fab
        sx={{ marginTop: 2, float: 'right', right: 24 }}
        color="primary"
        id="new-employee-button"
        aria-label="add"
        onClick={openNewEmployeeModal}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}
