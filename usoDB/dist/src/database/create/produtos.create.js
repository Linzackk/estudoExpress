import { prisma } from "../prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { procurarCategoriaPorNome } from "../read/categorias.read.js";
export async function criarProdutoDb(name, price, categoria) {
    try {
        const categoriaDb = await procurarCategoriaPorNome(categoria);
        const categoriaId = categoriaDb.id;
        const produto = await prisma.product.create({
            data: {
                name: name,
                price: price,
                categoryId: categoriaId
            }
        });
        return { success: true, produto: produto };
    }
    catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return { success: false, message: "Produto ja existe" };
            }
        }
        return { success: false, message: "Erro interno do servidor" };
    }
}
//# sourceMappingURL=produtos.create.js.map