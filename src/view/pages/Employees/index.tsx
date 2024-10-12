import { Container, Typography } from "@mui/material";
import EmployeesTable from "../../components/EmployeesTable";
import { EmployeesTableFilter } from "../../components/EmployeesTableFilter";

export function Employees() {
  return (
    <Container sx={{ maxWidth: 980, marginTop: 6 }}>
      <Typography variant="h4">Pesquisa de Funcionários</Typography>
      <EmployeesTableFilter />
      <EmployeesTable />
    </Container>
  )
}
