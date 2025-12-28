import { Request, Response } from "express";

import { procurarCategoriaPorId, procurarCategoriaPorNome } from "../database/read/categorias.read.js";
import { criarCategoriaDb } from "../database/create/categorias.create.js";
import { atualizarCategoriaDb } from "../database/update/categorias.update.js";
import { deletarCategoriaDb } from "../database/delete/categorias.delete.js";

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

export async function criarCategoria(
    req: Request,
    res: Response
) {
    const {nome} = req.body;

    const categoriaCriada = await criarCategoriaDb(nome);
    const {categoria} = categoriaCriada

    if (!categoriaCriada.success) {
        res.status(500).json({
            message: "Categoria nao pode ser criada",
            error: categoriaCriada.message,
        });
        return
    }

    res.status(200).json({
        message: "Categoria criada",
        categoria
    });
}

export async function atualizarCategoria(
    req: Request,
    res: Response,
) {
    const {nome} = req.body;

    const {id} = req.params;

    const idNumerico = Number(id)

    const categoriaAtualizada = await atualizarCategoriaDb(idNumerico, nome);

    if (!categoriaAtualizada.success) {
        res.status(404).json({
            message: categoriaAtualizada.message,
        });
        return
    }

    const {categoria} = categoriaAtualizada

    res.status(200).json({
        message: "Categoria atualizada",
        categoria: categoria
    });
}