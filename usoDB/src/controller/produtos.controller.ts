import { Request, Response } from "express";
import { procurarProdutoPorId, procurarProdutosPorCategoria } from "../database/read/produtos.read.js";

export async function lerProduto(
    req: Request,
    res: Response
) {    
    const {id} = req.params;

    const idNumerico = Number(id)

    const produto = await procurarProdutoPorId(idNumerico);

    if (!produto) {
        res.status(404).json({
            message: "Produto com ID inexistente"
        })
        return
    }

    res.status(200).json({
        message: `Produto ID ${id}`,
        data: {produto: produto}
    })
}

export async function lerProdutosPorCategoria(
    req: Request,
    res: Response
) {
    const {categoria} = req.params;

    const produtos = await procurarProdutosPorCategoria(categoria)

    if (!produtos) {
        res.status(404).json({
            message: "Nao há produtos nessa categoria",
        });
        return
    }

    res.status(200).json({
        message: `Produtos da categoria ${categoria}`,
        produtos,
    });
}