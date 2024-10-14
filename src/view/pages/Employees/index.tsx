import { Container, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EmployeesTable from "../../components/EmployeesTable";
import { useState } from "react";
import { NewEmployeeModal } from "./modals/NewEmployeeModal";

export function Employees() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ maxWidth: 980, marginTop: 6 }}>
      <EmployeesTable />
      <Fab
        sx={{ marginTop: 2, float: 'right', right: 24 }}
        color="primary"
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <NewEmployeeModal open={open} handleClose={handleClose} />
    </Container>
  )
}
