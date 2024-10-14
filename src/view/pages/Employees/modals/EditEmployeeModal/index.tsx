import { Box, Button, FormControl, IconButton, Modal, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { employeesService } from "../../../../../app/services/employeesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import 'dayjs/locale/br';
import toast from "react-hot-toast";
import { useEmployeesContext } from "../../../../../app/hooks/useEmployeesContext";
import { useEffect } from "react";
import dayjs from "dayjs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const schema = z.object({
  nome: z.string().min(1, 'Informe o nome'),
  matricula: z.string().min(1, 'Informe a matrícula'),
  cargo: z.string().min(1, 'Informe o cargo'),
  filial: z.string().min(1, 'Informe a filial'),
  dataAdmissao: z.any().refine((value) => value !== null, {
    message: 'Informe a data de admissão'
  }),
});

type FormData = z.infer<typeof schema>;

export function EditEmployeeModal() {
  const {
    isEditEmployeeModalOpen,
    closeEditEmployeeModal,
    employeeBeingEdited
  } = useEmployeesContext();

  const {
    control,
    handleSubmit: hookFormSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    reset({
      nome: employeeBeingEdited?.nome,
      matricula: employeeBeingEdited?.matricula,
      cargo: employeeBeingEdited?.cargo,
      filial: employeeBeingEdited?.filial,
      dataAdmissao: dayjs(employeeBeingEdited?.dataAdmissao, 'DD/MM/YYYY'),
    });
  }, [employeeBeingEdited, reset]);

  const queryClient = useQueryClient();
  const {
    mutateAsync
  } = useMutation({ mutationFn: employeesService.update });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        id: employeeBeingEdited!.id,
        dataAdmissao: data.dataAdmissao?.format('DD/MM/YYYY') ?? ''
      });

      queryClient.invalidateQueries({ queryKey: ['employees'] });
      toast.success('Funcionário editado com sucesso');
      closeEditEmployeeModal();
    } catch {
      toast.error('Erro ao editar funcionário');
    }
  })

  return (
    <Modal
      open={isEditEmployeeModalOpen}
      onClose={closeEditEmployeeModal}
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
            <Typography variant="h4" textAlign="center" sx={{ width: "100%" }}>Editar Funcionário</Typography>
            <IconButton onClick={closeEditEmployeeModal} sx={{ position: 'absolute', top: 8, right: 8 }}>
              <CloseIcon />
            </IconButton>

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
                    error={!!errors.nome}
                  />
                )}
              />
              {errors.nome && (
                <Typography variant="caption" color="red" sx={{ width: "80%", margin: "0 auto" }}>
                  {errors.nome.message}
                </Typography>
              )}
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
                    error={!!errors.matricula}
                  />
                )}
              />
              {errors.matricula && (
                <Typography variant="caption" color="red" sx={{ width: "80%", margin: "0 auto" }}>
                  {errors.matricula.message}
                </Typography>
              )}
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
                    error={!!errors.cargo}
                  />
                )}
              />
              {errors.cargo && (
                <Typography variant="caption" color="red" sx={{ width: "80%", margin: "0 auto" }}>
                  {errors.cargo.message}
                </Typography>
              )}
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
                    error={!!errors.filial}
                  />
                )}
              />
              {errors.filial && (
                <Typography variant="caption" color="red" sx={{ width: "80%", margin: "0 auto" }}>
                  {errors.filial.message}
                </Typography>
              )}
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
                          size: "small",
                          error: !!errors.dataAdmissao
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
              Editar Funcionário
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
