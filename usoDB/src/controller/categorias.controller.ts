import { Request, Response } from "express";
import { procurarCategoriaPorId, procurarCategoriaPorNome } from "../database/read/categorias.read.js";

export async function lerCategoriaPorId (
    req: Request,
    res: Response
) {
    const {id} = req.params;

    const idNumerico = Number(id);

    const categoria = await procurarCategoriaPorId(idNumerico);

    if (!categoria) {
        res.status(404).json({
            message: "Categoria com ID inexistente"
        });
        return
    }

    res.status(200).json({
        message: `Categoria ID ${id}`,
        data: {categoria: categoria}
    });
}

export async function lerCategoriaPorNome (
    req: Request,
    res: Response,
) {
    const {nome} = req.params;

    const categoria = await procurarCategoriaPorNome(nome);

    if (!categoria) {
        res.status(404).json({
            message: "Categoria com nome Inexistente",
        });
        return
    }

    res.status(200).json({
        message: `Categoria ${nome}`,
        data: {categoria: categoria}
    });
}