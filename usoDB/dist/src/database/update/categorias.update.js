import { prisma } from "../prisma/client.js";
import { procurarCategoriaPorId } from "../read/categorias.read.js";
export async function atualizarCategoriaDb(categoriaId, nome) {
    if (!await procurarCategoriaPorId(categoriaId)) {
        return {
            success: false,
            message: "Categoria com ID inexistente"
        };
    }
    ;
    if (!nome) {
        return {
            success: false,
            message: "Nenhum valor para atualizacao inserido"
        };
    }
    // let data: dataAtualizacaoCategoria = {} Adicionar caso aumente informações nas categorias.
    const categoria = await prisma.category.update({
        where: { id: categoriaId },
        data: { name: nome },
    });
    return {
        success: true,
        categoria: categoria
    };
}
//# sourceMappingURL=categorias.update.js.map