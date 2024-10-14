import { Box, Button, FormControl, Modal, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SaveIcon from '@mui/icons-material/Save';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from "dayjs";
import { employeesService } from "../../../../../app/services/employeesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import 'dayjs/locale/br';
import toast from "react-hot-toast";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

interface NewEmployeeModalProps {
  open: boolean;
  handleClose: () => void;
}

export function NewEmployeeModal({ open, handleClose }: NewEmployeeModalProps) {
  const { control, handleSubmit: hookFormSubmit, reset } = useForm({
    defaultValues: {
      nome: '',
      matricula: '',
      cargo: '',
      filial: '',
      dataAdmissao: null as Dayjs | null,
    }
  });

  const queryClient = useQueryClient();
  const {
    mutateAsync
  } = useMutation({ mutationFn: employeesService.create });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        dataAdmissao: data.dataAdmissao?.format('DD/MM/YYYY') ?? ''
      });

      queryClient.invalidateQueries({ queryKey: ['employees'] });
      toast.success('Funcionário criado com sucesso');
      handleClose();
      reset();
    } catch {
      toast.error('Erro ao criar novo funcionário');
    }
  })

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Typography variant="h4" textAlign="center" sx={{ width: "100%" }}>Novo Funcionário</Typography>
            <FormControl fullWidth>
              <Controller
                name="nome"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nome"
                    variant="outlined"
                    size="small"
                    sx={{ width: "80%", margin: "0 auto" }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="matricula"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Matrícula"
                    variant="outlined"
                    size="small"
                    sx={{ width: "80%", margin: "0 auto" }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="cargo"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Cargo"
                    variant="outlined"
                    size="small"
                    sx={{ width: "80%", margin: "0 auto" }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="filial"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Filial"
                    variant="outlined"
                    size="small"
                    sx={{ width: "80%", margin: "0 auto" }}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <Controller
                name="dataAdmissao"
                control={control}
                render={({ field }) => (
                  <LocalizationProvider adapterLocale="br" dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Data de Admissão"
                      value={field.value}
                      inputRef={field.ref}
                      onChange={(date) => {
                        field.onChange(date);
                      }}
                      sx={{ width: "80%", margin: "0 auto" }}
                      slotProps={{
                        textField: {
                          size: "small"
                        }
                      }}
                    />
                  </LocalizationProvider>
                )}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
            >
              Salvar Novo Funcionário
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
