# Estudos com Express.js

Este repositório reúne todos os meus projetos de estudo utilizando Express.js, organizados por assunto.  
Cada tema diferente foi separado em uma pasta específica, facilitando a navegação, os testes e o aprendizado progressivo.

O objetivo deste repositório é centralizar meus experimentos e práticas com Express, seguindo boas práticas de organização, estrutura de projeto e uso de TypeScript.

---

## Sobre o repositório

- Cada pasta representa um assunto ou estudo específico
- Os projetos foram desenvolvidos utilizando TypeScript
- O código final foi buildado para JavaScript
- Todos os projetos podem ser executados diretamente com Node.js
- Estrutura pensada exclusivamente para fins de estudo

---

## Tecnologias utilizadas

- Node.js
- Express.js
- TypeScript
- JavaScript
- NPM
- dotenv
- bCrypt
- JWT

---

## Como rodar os projetos

### Pré-requisitos

Antes de rodar qualquer projeto, certifique-se de ter instalado:

- Node.js
- NPM

---

### Executando um projeto

1. Clone este repositório:
   git clone <url-do-repositorio>

2. Acesse a pasta do projeto que deseja testar:
   cd nome-do-projeto

3. Instale as dependências (caso ainda não estejam instaladas):
   npm install

4. Inicie o servidor:
   npm run start

Após executar o comando acima, o servidor será iniciado automaticamente.

---

## Estrutura dos projetos

De forma geral, cada projeto segue uma estrutura semelhante a esta:

nome-do-projeto/
├── dist/           # Código JavaScript gerado após o build
├── src/            # Código-fonte em TypeScript
├── package.json
└── tsconfig.json

---

## Projetos

### expressBasico


Projeto focado em autenticação de usuários utilizando Express, com separação de rotas públicas e protegidas por token.

Este projeto possui:
- Cadastro e gerenciamento de usuários
- Login com autenticação
- Rota protegida acessível apenas com token válido
- Tratamento de rota não encontrada (404)

---

Base URL
http://localhost:<porta>

---

Rotas de Usuários (/usuarios)

GET    /usuarios        Lista todos os usuários
POST   /usuarios        Cria um novo usuário
PUT    /usuarios/:id    Atualiza um usuário existente
DELETE /usuarios/:id    Remove um usuário

---

Rotas de Autenticação (/login)

POST /login  Realiza login e retorna o token de autenticação

Usuário disponível para login:
{
  id: 1,
  email: "email@email.com",
  senha: "123"
}

---

Rotas Protegidas (/api)

GET /api  Retorna mensagem de acesso autorizado e dados do usuário autenticado

Header esperado:
Authorization: Bearer <token>

---

Tratamento de Erros

Rota inexistente:
Status 404
Resposta:
{
  "erro": "Rota nao encontrada"
}

---

## Observações

Este repositório tem finalidade educacional e está em constante evolução.  
Novos projetos, melhorias de código e documentação podem ser adicionados ao longo do tempo.

---

## Autor

Isaac de Medeiros
