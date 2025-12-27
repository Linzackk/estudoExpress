import { prisma } from "../prisma/client.js";

export async function procurarProdutosPorCategoria(categoryId: number) {
    const produtosComCategoria = await prisma.product.findMany({
        where: {
            categoryId: categoryId,
        },
    });

    return produtosComCategoria
}

export async function procurarProdutoPorId(productId: number) {
    const produto = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });

    return produto
}

export async function procurarCategoriaPorNome(nomeProduto: string) {
    const produto = await prisma.product.findMany({
        where: {
            name: nomeProduto,
        },
    });
}