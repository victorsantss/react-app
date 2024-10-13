import { Container } from "@mui/material";
import EmployeesTable from "../../components/EmployeesTable";

export function Employees() {
  return (
    <Container sx={{ maxWidth: 980, marginTop: 6 }}>
      <EmployeesTable />
    </Container>
  )
}
