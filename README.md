# AdonisJS API

Este microsserviço foi desenvolvido em NodeJS e [AdonisJS](https://adonisjs.com/) como framework.
A seguir, darei o passo a passo de como clonar o repositório, intalar as dependências e rodar o projeto localmente.


## 🚀 Começando

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto, é imprescindível ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).
Optei pelo uso do [PostgreSQL](https://www.postgresql.org/) como banco relacional, então caso não tenha o mesmo instalado,
será necessário que utilize o [Docker](https://www.docker.com/products/docker-desktop/) ok?

### 📋 Pré-requisitos

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/) ({ node: 17.4.0, npm: 8.8.0 })
- [TypeScript](https://www.typescriptlang.org/) ({ tsc: 5.2.2 })

### 🔧 Instalação

```bash
# Clone este repositório
$ git clone git@github.com:gabrielhsantos/AdonisJS_API.git

# Acesse a pasta do projeto no terminal/cmd
$ cd AdonisJS_API

# Instale as dependências
$ npm ci
```

### 🎲 Banco de dados (servidor)

Caso utilize o PostgreSQL, basta executar os seguintes comandos:

```bash
# Execute as migrations
$ node ace migration:run
```

### 🐋 Container

Se a opção for o uso do Docker, existe na raiz do projeto um arquivo docker-compose,
que irá instalar o PostgreSQL em um conteiner.
Para isso, basta rodar esse comando:

```bash
# Subir o container Docker
$ npm run infra:up
```
Obs: ao subir a infra, o processo de migration e seed ocorrerá automaticamente.

Para derrubar o container e os volumes gerados, basta rodar:

```bash
# Remover o container Docker e volumes
$ npm run infra:down
```

# Execute a aplicação
```bash
$ node ace serve
```
O servidor inciará na porta:3333.

### ⚙️ Executando os testes

Para rodar os testes, basta utilizar este comando via terminal/cmd:

```bash
# Irá rodar os testes de integração e unitários
$ node ace test
