import { prisma } from "../prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export async function criarCategoria(name: string) {
    try {
        // Fazer uma validação para caso a categoria já exista
        const categoria = await prisma.category.create({
            data: {
                name: name
            }
        });
        console.log(categoria)
        console.log(`[${Date.now()}] Produto ${categoria} Criado.`)
        return { success: true, categoria}
    }
    catch (err: any) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return { success: false, message: "Categoria ja existe"}
            }
        }
        return { success: false, message: "Erro interno do servidor"}
    }
}