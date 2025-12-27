import { Request, Response } from "express";
import { procurarProdutoPorId } from "../database/read/produtos.read.js";

interface reqParams {
    id: number
}

export async function lerProduto(
    req: Request,
    res: Response
) {
    const {id} = req.params;

    const idNumerico = Number(id)

    const produto = await procurarProdutoPorId(idNumerico);

    res.status(200).json({
        message: `Produto ${id}`,
        data: {produto: produto}
    })
}