import { prisma } from "../prisma/client.js";
import { procurarCategoriaPorNome } from "./categorias.read.js";
export async function procurarProdutosPorCategoria(category) {
    const categoria = await procurarCategoriaPorNome(category);
    if (!categoria) {
        return {
            success: false,
            message: "Categoria Inexistente"
        };
    }
    const produtosComCategoria = await prisma.product.findMany({
        where: {
            categoryId: categoria.id,
        },
    });
    return produtosComCategoria;
}
export async function procurarProdutoPorId(productId) {
    const produto = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });
    return produto;
}
//# sourceMappingURL=produtos.read.js.map