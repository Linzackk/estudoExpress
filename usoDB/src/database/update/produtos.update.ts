import { prisma } from "../prisma/client.js";
import { procurarProdutosPorCategoria, procurarProdutoPorId } from "../read/produtos.read.js"

interface dataAtualizacaoProduto {
    price?: number,
    name?: string,
}

export async function atualizarProduto(produtoId: number, preco?: number, nome?: string) {
    if (!procurarProdutoPorId(produtoId)) {
        return {
            success: false,
            message: "Produto com ID inexistente"
        }
    }

    if (!preco && !nome) {
        return {
            success: false,
            message: "Nenhum valor para atualizacao inserido"
        }
    }

    let data: dataAtualizacaoProduto = {}

    if (preco) {
        data.price = preco
    }

    if (nome) {
        data.name = nome
    }

    const produtoAtualizado = await prisma.product.update({
        where: {id: produtoId},
        data: data,
    });

    return {
        success: true,
        produtoAtualizado
    }
}