import { criarCategoria} from "./database/create/categorias.create.js";
import { criarProduto} from "./database/create/produtos.create.js";

import { procurarCategoriaPorNome, procurarCategoriaPorId } from "./database/read/categorias.read.js";
import { procurarProdutosPorCategoria, procurarProdutoPorId } from "./database/read/produtos.read.js";

import { } from "./database/update/categorias.update.js";
import { atualizarProduto } from "./database/update/produtos.update.js";

import { deletarCategoria } from "./database/delete/categorias.delete.js";
import {} from "./database/delete/produtos.delete.js";

console.log(await procurarProdutoPorId(1))
console.log(await atualizarProduto(1, 1899.9))
