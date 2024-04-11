# BrazilGeoLookup

O **BrazilGeoLookup** é um projeto que fornece informações geográficas sobre estados e municípios brasileiros. Ele utiliza dados da API do Instituto Brasileiro de Geografia e Estatística (IBGE). Este README irá guiá-lo na configuração do projeto, uso e outros detalhes relevantes.

## Índice

- [Descrição](#descrição)
- [Status do Projeto](#status-do-projeto)
- [Recursos e Demonstração da Aplicação](#recursos-e-demonstração-da-aplicação)
- [Funcionalidades do Projeto](#funcionalidades-do-projeto)
- [Acessando o Projeto](#acessando-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuidores](#contribuidores)
- [Licença](#licença)
- [Referências](#referências)

## Descrição

O **BrazilGeoLookup** é uma ferramenta para obter informações sobre estados e municípios brasileiros. Ele fornece dados como códigos de estado, nomes e códigos IBGE para os municípios.

## Status do Projeto

Este projeto está atualmente em desenvolvimento.

## Recursos e Demonstração da Aplicação

- Obtenha uma lista de estados brasileiros.
- Consulte informações detalhadas sobre um estado específico usando seu código.
- Obtenha uma lista de municípios dentro de um estado.

## Funcionalidades do Projeto

O projeto inclui as seguintes funcionalidades:

- **getUfs**: Busca uma lista de estados brasileiros.
- **getUfByCode**: Obtém informações detalhadas sobre um estado específico usando seu código.
- **getContiesByUf**: Retorna uma lista de municípios dentro de um estado.

## Acessando o Projeto

Para usar o **BrazilGeoLookup**, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Instale as dependências necessárias usando `npm install`.
3. Execute o projeto com `npm start`.

## Tecnologias Utilizadas

- JavaScript
- Axios (para requisições à API)

## Contribuidores

- [Seu Nome](https://github.com/seunome)

## Licença

Este projeto está licenciado sob a Licença MIT.

## Referências

1. [Instituto Brasileiro de Geografia e Estatística (IBGE)](https://servicodados.ibge.gov.br/api/v1/localidades/estados)
