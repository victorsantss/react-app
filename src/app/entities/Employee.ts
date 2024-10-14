import { Dayjs } from "dayjs";

export interface Employee {
  id: number;
  nome: string;
  cargo: string;
  filial: string;
  matricula: string;
  dataAdmissao?: Dayjs;
}
