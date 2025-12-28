import { prisma } from "../prisma/client.js";
import { procurarCategoriaPorNome, procurarCategoriaPorId } from "../read/categorias.read.js";

export async function deletarCategoriaDb(categoriaId: number) {
    if (!procurarCategoriaPorId(categoriaId)){
        return { 
            success: false,
            message: "Categoria com ID inexistente"
        }
    }

    const categoria = await prisma.category.delete({
        where: {id: categoriaId},
    });

    return {
        success: true,
        categoria
    }
}