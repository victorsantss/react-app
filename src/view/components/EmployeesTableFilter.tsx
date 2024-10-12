import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function EmployeesTableFilter() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
      >
        <Typography variant="h6">SAJ</Typography>
        <FormControl sx={{ width: "50%" }}>
          <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Funcionário</MenuItem>
            <MenuItem value={20}>Filial</MenuItem>
            <MenuItem value={30}>Matrícula</MenuItem>
          </Select>
        </FormControl>
        <TextField sx={{ width: "50%" }} label="Procurar..." variant="outlined" />
      </Box>
    </Container>
  )
}
