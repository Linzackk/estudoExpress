import { prisma } from "../prisma/client.js";
import { procurarProdutosPorCategoria, procurarProdutoPorId } from "../read/produtos.read.js"

interface dataAtualizacaoProduto {
    price?: number,
    name?: string,
    categoryId?: number,
}

export async function atualizarProdutoDb(produtoId: number, preco?: number, nome?: string, idCategoria?: number) {
    if (!await procurarProdutoPorId(produtoId)) {
        return {
            success: false,
            message: "Produto com ID inexistente"
        }
    }

    if (!preco && !nome && !idCategoria) {
        return {
            success: false,
            message: "Nenhum valor para atualizacao inserido"
        }
    }

    let data: dataAtualizacaoProduto = {};

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
        where: {id: produtoId},
        data: data,
    });

    return {
        success: true,
        produtoAtualizado: produtoAtualizado
    }
}