"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContiesByUf = exports.getUfByCode = exports.getUfs = void 0;
const axios_1 = __importDefault(require("axios"));
const URL_UF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const getUfs = () => axios_1.default.get(URL_UF);
exports.getUfs = getUfs;
const getUfByCode = (code) => axios_1.default.get(`${URL_UF}/${code}`);
exports.getUfByCode = getUfByCode;
const getContiesByUf = async (uf) => {
    const { data } = await axios_1.default.get(`${URL_UF}/${uf}/municipios`);
    return data.map((item) => ({
        nome: item.nome,
        codigo_ibge: `${item.id}`,
    }));
};
exports.getContiesByUf = getContiesByUf;
//# sourceMappingURL=index.js.map