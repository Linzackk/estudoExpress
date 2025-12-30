import { Request, Response, NextFunction } from "express";

export function validarCriarUsuario(req: Request, res: Response, next: NextFunction) {
    const {email, name} = req.body;

    if (!email || !name) {
        res.status(400).json({
            message: "email e name são obrigatórios"
        });
        return
    }
    
    next()
}

export function validarDeletarUsuario(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    if (!id) {
        res.status(400).json({
            message: "id precisa ser inteiro",
        });
        return
    }

    next()
}

export function validarAtualizarUsuario(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    if (!id) {
        res.status(400).json({
            message: "id precisa ser inteiro",
        });
        return
    }

    next()
}