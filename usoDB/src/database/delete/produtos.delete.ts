import { prisma } from "../prisma/client.js";
import { procurarProdutosPorCategoria, procurarProdutoPorId } from "../read/produtos.read.js"

export async function deletarProduto(produtoId: number) {
    if (!procurarProdutoPorId(produtoId)) {
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