import { prisma } from "../prisma/client.js";
import { procurarCategoriaPorId } from "../read/categorias.read.js";
export async function deletarCategoriaDb(categoriaId) {
    if (!await procurarCategoriaPorId(categoriaId)) {
        return {
            success: false,
            message: "Categoria com ID inexistente"
        };
    }
    const categoria = await prisma.category.delete({
        where: { id: categoriaId },
    });
    return {
        success: true,
        categoria: categoria
    };
}
//# sourceMappingURL=categorias.delete.js.map