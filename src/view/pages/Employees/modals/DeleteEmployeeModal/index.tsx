import { Box, Button, Modal, Typography } from "@mui/material";
import { employeesService } from "../../../../../app/services/employeesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import 'dayjs/locale/br';
import toast from "react-hot-toast";
import { useEmployeesContext } from "../../../../../app/hooks/useEmployeesContext";

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

export function DeleteEmployeeModal() {
  const {
    isDeleteEmployeeModalOpen,
    closeDeleteEmployeeModal,
    employeeBeingDeleted,
  } = useEmployeesContext();

  const queryClient = useQueryClient();
  const {
    mutateAsync
  } = useMutation({ mutationFn: employeesService.remove });

  async function handleDeleteEmployee() {
    try {
      await mutateAsync(employeeBeingDeleted)

      queryClient.invalidateQueries({ queryKey: ['employees'] });
      toast.success('Funcionário excluído com sucesso');
      closeDeleteEmployeeModal();
    } catch {
      toast.error('Erro ao excluir funcionário');
    }
  }

  return (
    <Modal
      open={isDeleteEmployeeModalOpen}
      onClose={closeDeleteEmployeeModal}
    >
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" textAlign="center" sx={{ width: "100%" }}>
            Tem Certeza que deseja excluir este funcionário?
          </Typography>
          <Button
            onClick={handleDeleteEmployee}
            variant="outlined"
            color="error"
            id="confirm-delete-employee"
          >
            Excluir Funcionário
          </Button>
          <Button
            onClick={closeDeleteEmployeeModal}
            variant="outlined"
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}
