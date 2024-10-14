import { httpClient } from "../httpClient";

export type EmployeesFilters = {
  filterType: string;
  filterValue: string;
}

export async function getAll(filters?: EmployeesFilters) {
  const { data } = await httpClient.get('/funcionarios', { params: filters });
  return data;
}
