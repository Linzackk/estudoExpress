import { Request, Response } from "express";

import { procurarProdutoPorId, procurarProdutosPorCategoria } from "../database/read/produtos.read.js";
import { criarProdutoDb } from "../database/create/produtos.create.js";
import { atualizarProdutoDb } from "../database/update/produtos.update.js";
import { deletarProdutoDb } from "../database/delete/produtos.delete.js";

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
        data: {produtos}
    });
}

export async function criarProduto(
    req: Request,
    res: Response
) {
    const {nome, preco, categoria} = req.body

    const produtoCriado = await criarProdutoDb(nome, preco, categoria)

    if (!produtoCriado.success) {
        res.status(500).json({
            message: produtoCriado.message
        })
    }

    res.status(200).json({
        message: "Produto Criado",
        data: {produto: produtoCriado.produto}
    })
}

export async function atualizarProduto(
    req: Request,
    res: Response,
) {
    const {nome, preco, idCategoria} = req.body
    const {id} = req.params

    const idNumerico = Number(id)

    const produtoAtualizado = await atualizarProdutoDb(idNumerico, preco, nome, idCategoria)

    if (!produtoAtualizado.success) {
        res.status(404).json({
            message: produtoAtualizado.message
        })
    }

    res.status(200).json({
        message: "Produto atualizado",
        data: {produto: produtoAtualizado.produtoAtualizado}
    })
}

export async function deletarProduto(
    req: Request,
    res: Response,
) {
    const {id} = req.params;

    const idNumerico = Number(id);

    const produtoDeletado = await deletarProdutoDb(idNumerico);

    if (!produtoDeletado.success) {
        res.status(404).json({
            message: produtoDeletado.message
        });
    }

    res.status(200).json({
        message: "Produto deletado com sucesso",
        data: {produto: produtoDeletado.produtoDeletado}
    })
}