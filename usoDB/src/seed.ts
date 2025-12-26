import { prisma } from "./prisma/client.js";

export async function criarProdutos() {
    const cat1 = await prisma.category.create({
        data: {name: "Eletrônicos" },
    });

    const cat2 = await prisma.category.create({
        data: {name: "Roupas" },
    });

    console.log("Categorias criadas: ", cat1, cat2);

    const prod1 = await prisma.product.create({
        data: {
            name: "Smartphone",
            price: 1999.9,
            categoryId: cat1.id,
        },
    });

    const prod2 = await prisma.product.create({
        data: {
            name: "Camiseta",
            price: 79.9,
            categoryId: cat2.id,
        },
    });

    console.log("Produtos Criados: ", prod1, prod2)
}

export async function procurarProdutos() {
    const produtosComCategorias = await prisma.product.findMany({
        include: {
            category: true,
        },
    });

    console.log(produtosComCategorias);
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
    