import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Funcionário', width: 200 },
  { field: 'filial', headerName: 'Filial', width: 130 },
  {
    field: 'matricula',
    headerName: 'Matrícula',
    type: 'number',
    width: 90,
  },
  {
    field: 'dataAdmissao',
    headerName: 'Data de Entrada',
    width: 160,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function EmployeesTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/funcionarios')
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
      });
  }, []);

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
