import { prisma } from "../prisma/client.js";
export async function procurarCategoriaPorNome(nomeCategoria) {
    const categoria = await prisma.category.findMany({
        where: {
            name: nomeCategoria,
        },
    });
    return categoria[0];
}
export async function procurarCategoriaPorId(categoriaId) {
    const result = await prisma.category.findUnique({
        where: { id: categoriaId },
    });
    return result;
}
//# sourceMappingURL=categorias.read.js.map