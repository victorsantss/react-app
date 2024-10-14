import { Dayjs } from "dayjs";
import { httpClient } from "../httpClient";

export interface EditEmployeeParams {
  id: number;
  nome?: string;
  matricula?: string;
  cargo?: string;
  filial?: string;
  dataAdmissao?: Dayjs;
}

export async function update({
  id,
  ...params
}: EditEmployeeParams) {
  const { data } = await httpClient.put(`/funcionarios/${id}`, params);

  return data;
}
