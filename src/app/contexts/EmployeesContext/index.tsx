import { createContext, useCallback, useState } from "react";
import { Employee } from "../../entities/Employee";

interface EmployeesContextValue {
  isNewEmployeeModalOpen: boolean;
  isEditEmployeeModalOpen: boolean;
  isDeleteEmployeeModalOpen: boolean;
  employeeBeingEdited: Employee | null | undefined;
  employeeBeingDeleted: number | null | undefined;
  openNewEmployeeModal(): void;
  closeNewEmployeeModal(): void;
  openEditEmployeeModal(employee: Employee): void;
  closeEditEmployeeModal(): void;
  openDeleteEmployeeModal(employeeId: number): void;
  closeDeleteEmployeeModal(): void;
}

export const EmployeesContext = createContext({} as EmployeesContextValue);

export function EmployeesProvider({ children }: { children: React.ReactNode }) {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [employeeBeingEdited, setEmployeeBeingEdited] = useState<Employee | null>();
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState(false);
  const [employeeBeingDeleted, setEmployeeBeingDeleted] = useState<number | null>();

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

  const openDeleteEmployeeModal = useCallback((employeeId: number) => {
    setEmployeeBeingDeleted(employeeId);
    setIsDeleteEmployeeModalOpen(true);
  }, []);

  const closeDeleteEmployeeModal = useCallback(() => {
    setEmployeeBeingDeleted(null);
    setIsDeleteEmployeeModalOpen(false);
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        isNewEmployeeModalOpen,
        isEditEmployeeModalOpen,
        isDeleteEmployeeModalOpen,
        employeeBeingEdited,
        employeeBeingDeleted,
        openNewEmployeeModal,
        closeNewEmployeeModal,
        openEditEmployeeModal,
        closeEditEmployeeModal,
        openDeleteEmployeeModal,
        closeDeleteEmployeeModal,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}
