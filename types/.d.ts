import { AxiosResponse } from 'axios';
// interfaces.d.ts

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

// axios.d.ts

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

declare module './interfaces' {
  export interface UfResponse extends State {}
  export interface CountyResponse {
    codigo_ibge: string;
  }
}

// api.d.ts

export declare function getUfs(): Promise<AxiosResponse<UfResponse[]>>;
export declare function getUfByCode(code: string): Promise<AxiosResponse<UfResponse>>;
export declare function getContiesByUf(uf: string): Promise<CountyResponse[]>;
