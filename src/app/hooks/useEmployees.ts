import { useQuery } from "@tanstack/react-query";
import { EmployeesFilter } from "../entities/EmployeesFilter";
import { employeesService } from "../services/employeesService";

export function useEmployees(filters?: EmployeesFilter) {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: () => employeesService.getAll(filters),
  })

  return {
    employeesData: data,
    isLoading: isFetching,
    refetchEmployees: refetch,
  }
}
