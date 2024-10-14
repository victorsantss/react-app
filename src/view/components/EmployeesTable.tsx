import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { EmployeesTableFilter } from './EmployeesTableFilter';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { EmployeeAvatar } from './EmployeeAvatar';
import { Employee } from '../../app/entities/Employee';
import { EmployeesFilter } from '../../app/entities/EmployeesFilter';
import { useEmployees } from '../../app/hooks/useEmployees';
import { useEffect, useState } from 'react';

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
];

const paginationModel = { page: 0, pageSize: 5 };

export default function EmployeesTable() {
  const [filters, setFilters] = useState<EmployeesFilter>();
  const { employeesData, isLoading, refetchEmployees } = useEmployees(filters);

  function onFilterSubmit(filter: EmployeesFilter) {
    setFilters(filter);
  }

  useEffect(() => {
    refetchEmployees();
  }, [filters, refetchEmployees]);

  const rows = employeesData?.map((employee: Employee) => {
    return {
      id: employee.id,
      nome: employee.nome,
      cargo: employee.cargo,
      filial: employee.filial,
      matricula: employee.matricula,
      dataAdmissao: employee.dataAdmissao,
    }
  })

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
