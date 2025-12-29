import { prisma } from "../prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
export async function criarCategoriaDb(name) {
    try {
        // Fazer uma validação para caso a categoria já exista
        const categoria = await prisma.category.create({
            data: {
                name: name
            }
        });
        return { success: true, categoria: categoria };
    }
    catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return { success: false, message: "Categoria ja existe" };
            }
        }
        return { success: false, message: "Erro interno do servidor" };
    }
}
//# sourceMappingURL=categorias.create.js.map