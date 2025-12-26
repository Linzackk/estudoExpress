import { prisma } from "./prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export async function criarProduto(name: string, price: number, categoria: string) {
    try {
        const produto = await prisma.product.create({
            data: {
                name: name,
                price: price,
                categoryId: 1
            }
        });
        console.log(`[${Date.now()}] Produto ${produto} Criado.`)
        return { success: true, produto};
    }
    catch (err: any) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return { success: false, message: "Produto ja existe"}
            }
        }
        return { success: false, message: "Erro interno do servidor"}
    }
}

export async function criarCategoria(name: string) {
    try {
        const categoria = await prisma.category.create({
            data: {
                name: name
            }
        });
        console.log(`[${Date.now()}] Produto ${categoria} Criado.`)
        return { success: true, categoria}
    }
    catch (err: any) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return { success: false, message: "Categoria ja existe"}
            }
        }
        return { success: false, message: "Erro interno do servidor"}
    }
}

export async function procurarCategoria(nomeCategoria: string) {
    const categoria = await prisma.category.findFirst({
        where: {
            name: nomeCategoria,
        },
    });
}

export async function procurarProdutosPorCategoria(categoryId: number) {
    const produtosComCategoria = await prisma.product.findMany({
        where: {
            categoryId: categoryId,
        },
    });

    return produtosComCategoria
}

export async function procurarProduto(productId: number) {
    const produto = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });

    return produto
}

export async function atualizarProduto() {
    const produtoAtualizado = await prisma.product.update({
        where: {id: 1},
        data: { price: 1899.9, name: "Smartphone Pro"},
    });

    // updateMany atualiza varios

    console.log(produtoAtualizado);
}

export async function deletarProduto() {
    const produtoRemovido = await prisma.product.delete({
        where: {id: 2},
    });

    // deleteMany deleta vários

    console.log(produtoRemovido)
}
    