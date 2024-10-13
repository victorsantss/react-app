import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface EmployeesTableFilterProps {
  handleFilterTypeChange: (event: SelectChangeEvent) => void;
  handleFilterValueChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  filterType: string;
  filterValue: string;
}

export function EmployeesTableFilter({
  filterType,
  filterValue,
  handleFilterTypeChange,
  handleFilterValueChange
}: EmployeesTableFilterProps) {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h6" textAlign="center" sx={{ width: "10%" }}>SAJ</Typography>
      <FormControl sx={{ width: "20%" }} size="small">
        <InputLabel id="demo-simple-select-label">Tipo de Filtro</InputLabel>
        <Select
          value={filterType}
          label="Tipo de Filtro"
          onChange={handleFilterTypeChange}
        >
          <MenuItem value="nome">Funcionário</MenuItem>
          <MenuItem value="filial">Filial</MenuItem>
          <MenuItem value="matricula">Matrícula</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "60%" }} size="small">
        <TextField
          onChange={(target) => handleFilterValueChange(target)}
          value={filterValue}
          label="Digite..."
          variant="outlined"
          size="small"
        />
      </FormControl>
      <Button
        variant="outlined"
        endIcon={<SearchIcon />}
      >
        Procurar
      </Button>
    </Box>
  )
}
