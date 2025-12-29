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

```
nome-do-projeto/
├── dist/           # Código JavaScript gerado após o build
├── src/            # Código-fonte em TypeScript
├── package.json
└── tsconfig.json
```

---

## Projetos

---

### expressBasico

Projeto focado em autenticação de usuários utilizando Express, com separação de rotas públicas e protegidas por token.

Este projeto possui:
- Cadastro e gerenciamento de usuários
- Login com autenticação
- Rota protegida acessível apenas com token válido
- Tratamento de rota não encontrada (404)

Base URL
http://localhost:<porta>

Rotas de Usuários (/usuarios)

GET    /usuarios        Lista todos os usuários

POST   /usuarios        Cria um novo usuário

Body esperado:

```json
{ 
   nome: string,
   idade: int,
}
```

PUT    /usuarios/:id    Atualiza um usuário existente

DELETE /usuarios/:id    Remove um usuário

___

Rotas de Autenticação (/login)

POST /login  Realiza login e retorna o token de autenticação

Usuário disponível para login:

```json
{
  id: 1,
  email: "email@email.com",
  senha: "123"
}
```

Rotas Protegidas (/api)

GET /api  Retorna mensagem de acesso autorizado e dados do usuário autenticado

Header esperado:
Authorization: Bearer <token>

Tratamento de Erros

Rota inexistente:
Status 404
Resposta:

```json
{
  "erro": "Rota nao encontrada"
}
```

---

### expressAutenticacaoValidacao

Projeto focado em autenticação e autorização utilizando Express, com controle de acesso baseado em perfil de usuário e uso de refresh token.

Este projeto possui:
- Login com autenticação
- Proteção de rotas com JWT
- Autorização por perfil (admin / user)
- Refresh token
- Logout

Base URL
http://localhost:<porta>

Rotas de Autenticação (/auth)

GET    /auth             Rota de teste de autenticação

POST   /auth/login       Realiza login e retorna access token e refresh token

POST   /auth/refresh     Gera um novo access token a partir do refresh token

POST   /auth/logout      Invalida o refresh token do usuário

---

Rotas Protegidas

GET /auth/admin

Descrição:

Rota protegida acessível apenas para usuários autenticados com perfil "admin".

Middlewares utilizados:

- autenticarToken
- autorizar(["admin"])

Resposta de sucesso:

```json
{
  "mensagem": "Acesso liberado a area de admin",
  "usuario": { ... }
}
```

Usuários cadastrados para teste

Usuário administrador:

```json
{
  id: 1,
  email: "teste@email.com",
  senha: "123456",
  perfil: "admin"
}

Usuário comum:
{
  id: 2,
  email: "teste2@email.com",
  senha: "123456",
  perfil: "user"
}
```

Observação:

As senhas são armazenadas utilizando bcrypt.

Headers esperados para rotas protegidas

Authorization: Bearer <token>

---

### validacaoDados

Projeto focado em validação de dados utilizando Express.js com a biblioteca express-validator, aplicando validações por meio de middlewares antes da execução da lógica de negócio.

Este projeto possui:
- Validação de dados de entrada
- Uso intensivo de middlewares com express-validator
- Separação entre validação e controllers
- Padronização de respostas de erro

Base URL  
http://localhost:<porta>

Rotas de Usuários (/users)

POST /users

Descrição:

Cria um novo usuário com validação completa dos dados enviados no body da requisição.

Middlewares utilizados:
- validarCriarUsuario
- validarResultado

Body esperado:
```json
{
  "name": "Nome do Usuário",
  "email": "email@email.com",
  "password": "SenhaForte@123",
  "role": "admin"
}
```

Observações:
- name deve conter no mínimo 3 caracteres
- email deve ser válido
- password deve ser uma senha forte
- role é opcional e aceita apenas "admin" ou "user"

GET /users

Descrição:

Lista usuários com validação dos parâmetros enviados via query string.

- Middlewares utilizados:
- validarListagemUsuario
- validarResultado

Query params esperados:

```json
{
  "page": 1,
  "limit": 10,
  "role": "user"
}
```
Todos os parâmetros são opcionais.

Rotas de Login (/login)

- POST /login
- Descrição:
- Realiza login com validação dos dados enviados no body da requisição.

Middlewares utilizados:

- validarLoginValidator
- validarResultado

Body esperado:

```json
{
  "email": "email@email.com",
  "senha": "SenhaForte@123"
}
```

Observações:
- email deve ser válido
- senha deve ser uma senha forte (mínimo 8 caracteres, com letra maiúscula, minúscula, número e símbolo)

---

### usoDB

Projeto focado em CRUD de produtos e categorias utilizando Express.js, validação de dados com express-validator e integração com PostgreSQL com Prisma.

Este projeto **não pode ser executado diretamente** por terceiros, pois as credenciais do banco de dados estão armazenadas em um arquivo `.env` local que não faz parte do repositório.  
Mesmo assim, ele é mantido no repositório por ser um projeto importante para estudo de validação, organização de rotas e integração com banco de dados.

---

Observação importante

Para executar este projeto seria necessário:
- Criar um arquivo `.env`
- Configurar as variáveis de ambiente do banco de dados
- Ter o banco corretamente estruturado

---

Base URL  
http://localhost:<porta>

---

Rotas de Produtos (/produtos)

GET /produtos/id/:id  
Descrição:  
Busca um produto pelo ID.

Parâmetros esperados:
```json
{
  "id": 1
}
```

GET /produtos/categoria/:categoria
Descrição:
Lista produtos filtrados por categoria.

Parâmetros esperados:

```json
{
  "categoria": "eletronicos"
}
```

POST /produtos
Descrição:
Cria um novo produto.

Body esperado:

```json
{
  "nome": "Produto Exemplo",
  "preco": 99.90,
  "categoria": "eletronicos"
}
```

PUT /produtos/:id
Descrição:
Atualiza um Produto existente

Parâmetros:

```json
{
  "id": 1
}
```

Body esperado:

```json
{
  "nome": "Produto Atualizado",
  "preco": 120.00,
  "idCategoria": 2
}
```
Todos os campos do body são opcionais.

Rotas de Categorias (/categorias)

GET /categorias/id/:id
Descrição:
Busca uma categoria pelo ID.

Parâmetros esperados:

```json
{
   "id": 1
}
```

GET /categorias/nome/:nome
Descrição:
Busca uma categoria pelo nome.

Parâmetros esperados:

```json
{
  "nome": "eletronicos"
}
```

POST /categorias
Descrição:
Cria uma nova categoria.

Body esperado:

```json
{
  "nome": "eletronicos"
}
```

PUT /categorias/:id
Descrição:
Atualiza o nome de uma categoria.

Parâmetros:

```json
{
   "id": 1
}
```

Body esperado
```json
{
  "nome": "Eletrônicos"
}
```
DELETE /categorias/:id
Descrição:
Remove uma categoria pelo ID.

```json
{
  "id": 1
}
```

Validações aplicadas

- Todos os IDs devem ser inteiros maiores que 0
- Campos de texto devem ser strings não vazias
- Preço do produto deve ser float maior ou igual a 0.01
- As validações são aplicadas via middlewares com express-validator
- O middleware validarResultado interrompe a requisição em caso de erro

Importância do projeto

Mesmo sem execução direta, este projeto demonstra:
- Organização de rotas REST
- Separação de responsabilidades
- Validação robusta de parâmetros e body
- Integração com banco de dados via variáveis de ambiente
- Boas práticas de segurança ao não expor credenciais

---

### Segurança e Variáveis de Ambiente em APIs

Projeto focado na aplicação de práticas básicas e essenciais de segurança em APIs utilizando Express.js, com uso de variáveis de ambiente e middlewares amplamente adotados no mercado.

Este projeto demonstra como configurar uma API segura desde a inicialização, aplicando proteções comuns contra abusos e más práticas.

---

Observação importante

Este projeto depende de variáveis definidas em um arquivo `.env`.  
Sem essas variáveis, a aplicação não inicia corretamente.

Exemplo de variáveis necessárias no `.env`:
```env
PORT=3000
CORS_ORIGIN=http://localhost:3000
```

Configurações de segurança aplicadas:
- Uso de variáveis de ambiente com .env
- CORS configurado com origem controlada
- Helmet para configuração de headers de segurança
- Rate limit para proteção contra força bruta e abuso de requisições
- Validação da existência de variáveis críticas na inicialização da aplicação

Middlewares utilizados

Middleware padrão:

- express.json
Responsável por permitir o parsing de requisições JSON.

CORS
```text
cors({
  origin: process.env.CORS_ORIGIN
})
```
Restringe quais origens podem acessar a API, evitando requisições não autorizadas de outros domínios.

Helmet
```text
helmet()
```
Adiciona headers HTTP de segurança automaticamente, protegendo contra:

- XSS
- Clickjacking
- Sniffing de MIME types
- Outras vulnerabilidades comuns

Rate Limit
Login Rate Limiter:
```text
Janela: 15 minutos
Máximo de tentativas: 5
```
Utilizado para proteger a rota de login contra ataques de força bruta.

Mensagem de bloqueio:

```json
{
  "message": "Muitas tentativas de Login. Tente novamente mais tarde"
}
```

API Rate Limiter:

```text
Janela: 1 minuto
Máximo de requisições: 100
```

Utilizado para limitar o número de requisições gerais à API, evitando abuso e sobrecarga.

Fluxo de inicialização da aplicação
1. Configuração do Express
2. Aplicação do middleware express.json
3. Configuração do CORS com base no .env
4. Aplicação do Helmet
5. Validação da variável PORT
6. Registro das rotas
7. Inicialização do servidor

Rota de Login (exemplo)

POST /login
Descrição:
Rota de login simulada apenas para fins de estudo.

Body esperado:

```json
{
  "email": "admin@email.com",
  "password": "123456"
}
```
Respostas possíveis:

- 200: Login realizado com sucesso
- 401: Credenciais inválidas

Importância do projeto
- Este projeto é importante para demonstrar:
- Uso correto de variáveis de ambiente
- Configuração de segurança desde o bootstrap da aplicação
- Proteções básicas esperadas em APIs REST
- Boas práticas adotadas em ambientes reais de produção

---

## Observações

Este repositório tem finalidade educacional e está em constante evolução.  
Novos projetos, melhorias de código e documentação podem ser adicionados ao longo do tempo.

---

## Autor

Isaac de Medeiros
