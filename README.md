# Exercício Frontend

O objetivo deste desafio é construir uma página html responsiva conforme o design proposto e carregar a parte dinâmica do conteúdo a partir de um serviço REST.
Veja o repositório original para mais informações.

## Como rodar o exemplo

**Pré-requisitos**: possuir Node.js e NPM instalados na sua máquina.

Execute `npm install` na raiz do projeto para instalar as dependências.

Execute `npm run start` para rodar o servidor local em http://localhost:3000.

Execute `npm run dev` para rodar o webpack-web-server em http://localhost:8080. Será aberta a página com hot-reload do seu código.

## Como rodar a build de produção

Execute `npm run build` para gerar os arquivos para produção. Após o build executar, abra o arquivo index.html que se encontra na raiz.
Obs.: Mesmo com a build de produção, o servidor local precisa estar de pé, então rode `npm run start` antes.