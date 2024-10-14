import { useEffect, useState } from "react";
import { EmployeesFilter } from "../../../app/entities/EmployeesFilter";
import { useEmployees } from "../../../app/hooks/useEmployees";
import { Employee } from "../../../app/entities/Employee";

export function useEmployeesTableController() {
  const [filters, setFilters] = useState<EmployeesFilter>();
  const { employeesData, isLoading, refetchEmployees } = useEmployees(filters);

  function onFilterSubmit(filter: EmployeesFilter) {
    setFilters(filter);
  }

  useEffect(() => {
    refetchEmployees();
  }, [filters, refetchEmployees]);

  const rows = employeesData?.map((employee: Employee) => {
    return {
      id: employee.id,
      nome: employee.nome,
      cargo: employee.cargo,
      filial: employee.filial,
      matricula: employee.matricula,
      dataAdmissao: employee.dataAdmissao,
    }
  })


  return {
    isLoading,
    onFilterSubmit,
    rows,
  }
}
