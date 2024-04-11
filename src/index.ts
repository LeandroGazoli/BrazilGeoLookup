import axios, { AxiosResponse } from 'axios';
import { CountiesResponse, CountyResponse, UfResponse } from 'interfaces';

const URL_UF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const getUfs = (): Promise<AxiosResponse<UfResponse[]>> =>
  axios.get<UfResponse[]>(URL_UF);
export const getUfByCode = (code: string): Promise<AxiosResponse<UfResponse>> =>
  axios.get<UfResponse>(`${URL_UF}/${code}`);

export const getContiesByUf = async (uf: string): Promise<CountyResponse[]> => {
  const { data } = await axios.get<CountiesResponse>(`${URL_UF}/${uf}/municipios`);

  return data.map((item) => ({
    nome: item.nome,
    codigo_ibge: `${item.id}`,
  }));
};
