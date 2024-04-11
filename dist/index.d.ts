import { AxiosResponse } from 'axios';
import { CountyResponse, UfResponse } from 'interfaces';
export declare const getUfs: () => Promise<AxiosResponse<UfResponse[]>>;
export declare const getUfByCode: (code: string) => Promise<AxiosResponse<UfResponse>>;
export declare const getContiesByUf: (uf: string) => Promise<CountyResponse[]>;
