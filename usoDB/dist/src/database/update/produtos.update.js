import { prisma } from "../prisma/client.js";
import { procurarProdutoPorId } from "../read/produtos.read.js";
export async function atualizarProdutoDb(produtoId, preco, nome, idCategoria) {
    if (!await procurarProdutoPorId(produtoId)) {
        return {
            success: false,
            message: "Produto com ID inexistente"
        };
    }
    if (!preco && !nome && !idCategoria) {
        return {
            success: false,
            message: "Nenhum valor para atualizacao inserido"
        };
    }
    let data = {};
    if (preco) {
        data.price = preco;
    }
    if (nome) {
        data.name = nome;
    }
    if (idCategoria) {
        data.categoryId = idCategoria;
    }
    const produtoAtualizado = await prisma.product.update({
        where: { id: produtoId },
        data: data,
    });
    return {
        success: true,
        produtoAtualizado: produtoAtualizado
    };
}
//# sourceMappingURL=produtos.update.js.map