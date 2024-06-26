import { AxiosResponse } from 'axios';
export interface Region {
  id: number;
  sigla: string;
  nome: string;
}

export interface State {
  id: number;
  sigla: string;
  nome: string;
  regiao: Region;
}

export type UfResponse = State;

export interface Microregion {
  id: number;
  nome: string;
  mesorregiao: {
    id: number;
    nome: string;
    UF: State;
  };
}

export interface County {
  id: number;
  nome: string;
  microrregiao: Microregion;
}

export interface CountyResponse {
  nome: string;
  codigo_ibge: string;
}

export type CountiesResponse = County[];

export declare function getUfs(): Promise<AxiosResponse<UfResponse[]>>;
export declare function getUfByCode(code: string): Promise<AxiosResponse<UfResponse>>;
export declare function getContiesByUf(uf: string): Promise<CountyResponse[]>;
