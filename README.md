## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Documentation

A seguir as informacoes do projeto:
  - Pasta /product e a pasta dos crud no mongodb:
    C: create - informe o body:
      ## /product - POST
    R: - findAll retorna tudo:
      ## /product - GET
     - findOne: tem o param id
      ## /product/{:id} - GET
    U: - update param id o body para atualizar
      ## {/product/:id, PUT}
    D: delete param id
      ## {/product/:id, DELETE}

  - Pasta /user e authetication do usuario da api do Irroba
      ## {/users, POST}

  - Para pegar o producto na api precisa desse endpoint:
      ## {/users/:id, GET}
 Para rodar o o projeto precisa ir no bash e escrever :
  ## npm run dev


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

- Author - [Fabio Eduard Circuncisao]()

## License

