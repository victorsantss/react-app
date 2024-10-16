import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";
import { EmployeesFilter } from "../../app/entities/EmployeesFilter";
import { useEmployees } from "../../app/hooks/useEmployees";

interface EmployeesTableFilterProps {
  onFilterSubmit: (data: EmployeesFilter) => void;
}

export function EmployeesTableFilter({
  onFilterSubmit
}: EmployeesTableFilterProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      filterValue: '',
      filterType: 'nome',
    }
  });
  const { refetchEmployees } = useEmployees();

  return (
    <form onSubmit={handleSubmit(onFilterSubmit)}>
      <Box
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
          <Controller
            name="filterType"
            control={control}
            render={({ field }) => (
              <Select
                label="Tipo de Filtro"
                aria-label="Tipo de Filtro"
                {...field}
              >
                <MenuItem value="nome">Funcionário</MenuItem>
                <MenuItem value="filial">Filial</MenuItem>
                <MenuItem value="matricula">Matrícula</MenuItem>
                <MenuItem value="cargo">Cargo</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <FormControl sx={{ width: "60%" }} size="small">
          <Controller
            name="filterValue"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Digite..."
                variant="outlined"
                size="small"
                slotProps={{
                  htmlInput: { "data-testid": "digite" },
                  input: {
                    endAdornment: field.value ? (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            field.onChange('');
                            refetchEmployees();
                          }}
                          edge="end"
                        >
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                  }
                }}
              />
            )}
          />
        </FormControl>
        <Button
          type="submit"
          variant="outlined"
          endIcon={<SearchIcon />}
          id="search-button"
        >
          Procurar
        </Button>
      </Box>
    </form>
  )
}
