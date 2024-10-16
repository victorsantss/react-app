import { Container } from "@mui/material";
import EmployeesTable from "../../components/EmployeesTable";
import { NewEmployeeModal } from "./modals/NewEmployeeModal";
import { EmployeesProvider } from "../../../app/contexts/EmployeesContext";
import { NewEmployeeButton } from "../../components/NewEmployeeButton";
import { EditEmployeeModal } from "./modals/EditEmployeeModal";
import { DeleteEmployeeModal } from "./modals/DeleteEmployeeModal";

export function Employees() {
  return (
    <EmployeesProvider>
      <Container sx={{ maxWidth: 980, marginTop: 6 }}>
        <EmployeesTable />
        <NewEmployeeButton />
        <NewEmployeeModal />
        <EditEmployeeModal />
        <DeleteEmployeeModal />
      </Container>
    </EmployeesProvider>
  )
}
