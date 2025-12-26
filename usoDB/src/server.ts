import { criarCategoria, criarProduto} from "./seed.js";
import { prisma } from "./prisma/client.js";

criarCategoria("Frutas")
