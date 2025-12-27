import { prisma } from "../prisma/client.js";
import { procurarCategoriaPorNome, procurarCategoriaPorId } from "../read/categorias.read.js";

interface dataAtualizacaoCategoria {
    name?: string
}

export async function atualizarCategoria(categoriaId: number, nome?: string) {
    if (!procurarCategoriaPorId(categoriaId)) {
        return {
            success: false,
            message: "Categoria com ID inexistente"
        }
    };

    if (!nome) {
        return {
            sucess: false,
            message: "Nenhum valor para atualizacao inserido"
        };
    }

    // let data: dataAtualizacaoCategoria = {} Adicionar caso aumente informações nas categorias.

    const categoriaAtualizada = prisma.category.update({
        where: {id: categoriaId},
        data: { name: nome},
    });

    return {
        success: true,
        categoriaAtualizada
    }
}