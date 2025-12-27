import { criarCategoria} from "./database/create/categorias.create.js";
import { criarProduto} from "./database/create/produtos.create.js";

import { procurarCategoriaPorNome } from "./database/read/categorias.read.js"
import { prisma } from "./database/prisma/client.js";


import { deletarCategoria } from "./database/delete/categorias.delete.js";

console.log(await procurarCategoriaPorNome("Frutas"))
console.log(await deletarCategoria(4))
console.log(await deletarCategoria(5))
console.log(await procurarCategoriaPorNome("Frutas"))