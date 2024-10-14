import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress, Container, IconButton, Typography } from '@mui/material';
import { EmployeesTableFilter } from '../EmployeesTableFilter';
import { useEmployeesTableController } from './useEmployeesTableController';
import { EmployeeAvatar } from '../EmployeeAvatar';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const columns: GridColDef[] = [
  {
    field: 'nome',
    headerName: 'Funcionário',
    width: 300,
    headerAlign: 'center',
    renderCell: (params) => (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <EmployeeAvatar>{params.row.nome}</EmployeeAvatar>
        <Box>
          <Typography variant="body1">{params.row.nome}</Typography>
          <Typography variant="body2">{params.row.cargo}</Typography>
        </Box>
      </Box>
    ),
  },
  { field: 'filial', headerName: 'Filial', flex: 1, align: 'center', headerAlign: 'center' },
  {
    field: 'matricula',
    headerName: 'Matrícula',
    type: 'number',
    flex: 1, align: 'center', headerAlign: 'center',
  },
  {
    field: 'dataAdmissao',
    headerName: 'Data de Entrada',
    flex: 1, align: 'center', headerAlign: 'center',
  },
  {
    field: 'actions',
    headerName: 'Ações',
    flex: 1,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (
      <>
        <IconButton
          color="primary"
          onClick={() => { console.log(`edit ${params.row.id}`) }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          onClick={() => {
            console.log(`delete ${params.row.id}`)
          }}>
          <DeleteIcon />
        </IconButton>
      </>
    )
  }
];

const paginationModel = { page: 0, pageSize: 5 };

export default function EmployeesTable() {
  const { isLoading, onFilterSubmit, rows } = useEmployeesTableController();

  return (
    <Container>
      <EmployeesTableFilter
        onFilterSubmit={onFilterSubmit}
      />
      <Paper sx={{ height: 400, width: '100%' }}>
        {isLoading && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
            <CircularProgress />
          </Box>
        )}

        {!isLoading && (
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5]}
            disableColumnMenu
            disableRowSelectionOnClick
          />
        )}
      </Paper>
    </Container>

  );
}
