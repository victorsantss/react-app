import { Container, Typography } from "@mui/material";
import DataTable from "../../components/DataTable";

export function Employees() {
  return (
    <Container sx={{ maxWidth: 980, marginTop: 6 }}>
      <Typography variant="h4">Pesquisa de Funcionários</Typography>
      <DataTable />
    </Container>
  )
}
