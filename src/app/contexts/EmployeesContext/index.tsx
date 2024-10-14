import { createContext, useCallback, useState } from "react";

interface EmployeesContextValue {
  isNewEmployeeModalOpen: boolean;
  openNewEmployeeModal(): void;
  closeNewEmployeeModal(): void;
}

export const EmployeesContext = createContext({} as EmployeesContextValue);

export function EmployeesProvider({ children }: { children: React.ReactNode }) {
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);

  const openNewEmployeeModal = useCallback(() => {
    setIsNewEmployeeModalOpen(true);
  }, []);

  const closeNewEmployeeModal = useCallback(() => {
    setIsNewEmployeeModalOpen(false);
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        isNewEmployeeModalOpen,
        openNewEmployeeModal,
        closeNewEmployeeModal
      }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}
