import { prisma } from "../prisma/client.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export async function criarProduto(name: string, price: number, categoria: string) {
    try {
        const produto = await prisma.product.create({
            data: {
                name: name,
                price: price,
                categoryId: 1
            }
        });
        console.log(produto)
        console.log(`[${Date.now()}] Produto ${produto} Criado.`)
        return { success: true, produto};
    }
    catch (err: any) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return { success: false, message: "Produto ja existe"}
            }
        }
        return { success: false, message: "Erro interno do servidor"}
    }
}

