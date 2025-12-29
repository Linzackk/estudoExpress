import { prisma } from "../prisma/client.js";
import { procurarProdutoPorId } from "../read/produtos.read.js";
export async function deletarProdutoDb(produtoId) {
    if (!await procurarProdutoPorId(produtoId)) {
        return {
            success: false,
            message: "Produto com ID inexistente"
        };
    }
    const produtoDeletado = await prisma.product.delete({
        where: { id: produtoId },
    });
    return {
        success: true,
        produtoDeletado: produtoDeletado
    };
}
//# sourceMappingURL=produtos.delete.js.map