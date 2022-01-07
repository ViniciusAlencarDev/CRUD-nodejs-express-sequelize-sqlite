# NodeJS CRUD M2

## Começando 📦

CRUD teste backend.
Projeto utilizando NodeJS, Sequelize e Sqlite.

## Pré-requisitos 📌

Precisa ter o **docker** instalado.

## Instalação ⚙️

Passo a passo para a execução da aplicação:

Para criar as tabelas e inserir dados de teste:
```
npx sequelize-cli db:migrate
```

Para inserir os dados iniciais:
```
npx sequelize-cli db:seed:all
```

Para criar o container do servidor:
```
docker build . -t viniciusalencardev/testem2backend
```

Para inciar o servidor:
```
docker run -p 3030:3030 -d viniciusalencardev/testem2backend
```

Estará disponivel em http://localhost:3030


* Agora é so usar 📢
* Obrigado
