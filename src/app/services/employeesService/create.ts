import { httpClient } from "../httpClient";

export interface CreateEmployeeParams {
  nome: string;
  matricula: string;
  cargo: string;
  filial: string;
  dataAdmissao: string;
}

export async function create(params: CreateEmployeeParams) {
  const { data } = await httpClient.post('/funcionarios', params);

  return data;
}
