import { useContext } from "react";
import { EmployeesContext } from "../contexts/EmployeesContext";

export function useEmployeesContext() {
  return useContext(EmployeesContext);
}
