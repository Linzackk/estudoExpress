import { prisma } from "../prisma/client.js";

export async function deletarCategoria(categoriaId: number) {
    // Validar se o id existe.

    const categoriaRemovida = await prisma.category.delete({
        where: {id: categoriaId},
    });

    console.log(categoriaRemovida)
}