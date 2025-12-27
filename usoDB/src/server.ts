import { criarCategoria} from "./database/create/categorias.create.js";
import { criarProduto} from "./database/create/produtos.create.js";

import { procurarCategoriaPorNome, procurarCategoriaPorId } from "./database/read/categorias.read.js";
import { procurarProdutosPorCategoria, procurarProdutoPorId } from "./database/read/produtos.read.js";

import { atualizarCategoria } from "./database/update/categorias.update.js";
import { atualizarProduto } from "./database/update/produtos.update.js";

import { deletarCategoria } from "./database/delete/categorias.delete.js";
import { deletarProduto } from "./database/delete/produtos.delete.js";

import app from "./app.js";

const port = 3000
app.listen(port , () => {
    console.log(`Servidor rodando em: http://localhost:${port}`)
})