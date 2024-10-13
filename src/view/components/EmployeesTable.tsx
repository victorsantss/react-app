import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { ChangeEvent, useEffect, useState } from 'react';
import { EmployeesTableFilter } from './EmployeesTableFilter';
import { Box, Container, SelectChangeEvent, Typography } from '@mui/material';
import { EmployeeAvatar } from './EmployeeAvatar';

interface Employee {
  id: number;
  nome: string;
  cargo: string;
  filial: string;
  matricula: number;
  dataAdmissao: string;
}

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
  const [employeesData, setEmployeesData] = useState([] as Employee[]);

  useEffect(() => {
    fetch('http://localhost:5000/funcionarios')
      .then((response) => response.json())
      .then((data) => {
        setEmployeesData(data);
      });
  }, []);

  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleFilterTypeChange = (event: SelectChangeEvent) => {
    setFilterType(event.target.value as string);
  };

  const handleFilterValueChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFilterValue(event.target.value);
  }

  const rows = employeesData.map((employee) => {
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
        handleFilterTypeChange={handleFilterTypeChange}
        handleFilterValueChange={handleFilterValueChange}
        filterType={filterType}
        filterValue={filterValue}
      />
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5]}
          disableColumnMenu
          disableRowSelectionOnClick
        />
      </Paper>
    </Container>

  );
}
