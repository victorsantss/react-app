import { EmployeesFilter } from "../../entities/EmployeesFilter";
import { httpClient } from "../httpClient";

export async function getAll(filters?: EmployeesFilter) {
  const {
    filterType,
    filterValue
  } = filters || { filterType: 'nome', filterValue: '' };

  const filterMap: Record<string, string> = {
    nome: 'nome_like',
    filial: 'filial_like',
    matricula: 'matricula_like',
  };

  const paramKey = filterMap[filterType];

  const { data } = await httpClient.get('/funcionarios', {
    params: {
      [paramKey]: filterValue,
    },
  });
  return data;
}
