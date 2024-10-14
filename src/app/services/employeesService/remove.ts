import { httpClient } from "../httpClient";

export async function remove(id: number | null | undefined) {
  const { data } = await httpClient.delete(`/funcionarios/${id}`);

  return data;
}
