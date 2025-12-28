import { prisma } from "../prisma/client.js";
import { procurarCategoriaPorNome, procurarCategoriaPorId } from "../read/categorias.read.js";

interface dataAtualizacaoCategoria {
    name?: string
}

export async function atualizarCategoriaDb(categoriaId: number, nome?: string) {
    if (!await procurarCategoriaPorId(categoriaId)) {
        return {
            success: false,
            message: "Categoria com ID inexistente"
        }
    };

    if (!nome) {
        return {
            success: false,
            message: "Nenhum valor para atualizacao inserido"
        };
    }

    // let data: dataAtualizacaoCategoria = {} Adicionar caso aumente informações nas categorias.

    const categoria = await prisma.category.update({
        where: {id: categoriaId},
        data: { name: nome},
    });

    return {
        success: true,
        categoria
    }
}