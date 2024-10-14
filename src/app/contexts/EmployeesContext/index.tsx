import { createContext, useCallback, useState } from "react";
import { Employee } from "../../entities/Employee";

interface EmployeesContextValue {
  isNewEmployeeModalOpen: boolean;
  isEditEmployeeModalOpen: boolean;
  employeeBeingEdited: Employee | null | undefined;
  openNewEmployeeModal(): void;
  closeNewEmployeeModal(): void;
  openEditEmployeeModal(employee: Employee): void;
  closeEditEmployeeModal(): void;
}

export const EmployeesContext = createContext({} as EmployeesContextValue);

export function EmployeesProvider({ children }: { children: React.ReactNode }) {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [employeeBeingEdited, setEmployeeBeingEdited] = useState<Employee | null>();

  const openNewEmployeeModal = useCallback(() => {
    setIsNewEmployeeModalOpen(true);
  }, []);

  const closeNewEmployeeModal = useCallback(() => {
    setIsNewEmployeeModalOpen(false);
  }, []);

  const openEditEmployeeModal = useCallback((employee: Employee) => {
    setEmployeeBeingEdited(employee);
    setIsEditEmployeeModalOpen(true);
  }, []);

  const closeEditEmployeeModal = useCallback(() => {
    setEmployeeBeingEdited(null);
    setIsEditEmployeeModalOpen(false);
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        isNewEmployeeModalOpen,
        isEditEmployeeModalOpen,
        employeeBeingEdited,
        openNewEmployeeModal,
        closeNewEmployeeModal,
        openEditEmployeeModal,
        closeEditEmployeeModal
      }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}
