import { prisma } from "../prisma/client.js";

export async function atualizarProduto() {
    const produtoAtualizado = await prisma.product.update({
        where: {id: 1},
        data: { price: 1899.9, name: "Smartphone Pro"},
    });

    // updateMany atualiza varios

    console.log(produtoAtualizado);
}