import { prisma } from "../prisma/client.js";
import { procurarProdutosPorCategoria, procurarProdutoPorId } from "../read/produtos.read.js"

export async function deletarProdutoDb(produtoId: number) {
    if (!await procurarProdutoPorId(produtoId)) {
        return {
            success: false,
            message: "Produto com ID inexistente"
        }
    }

    const produtoDeletado = await prisma.product.delete({
        where: {id: produtoId},
    });

    return {
        success: true,
        produtoDeletado
    }
}