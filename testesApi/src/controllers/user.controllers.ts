import { Request, Response } from "express";

import { users, User } from "../users/users";

export function criarUsuario(req: Request, res: Response) {
    const {name, email } = req.body;

    const newUser: User = {
        id: users.length + 1,
        name,
        email,
    };

    users.push(newUser);

    return res.status(201).json(newUser);
};

export function atualizarUsuario(req: Request, res: Response) {
    const id = Number(req.params.id);
    const {name, email} = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "Usuario nao encontrado" });
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    return res.status(200).json(user);
};

export function lerUsuarios(req: Request, res: Response) {
    return res.status(200).json(users);
}

export function deletarUsuario(req: Request, res: Response) {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Usuario nao encontrado"});
    }

    users.splice(index, 1);

    return res.status(204).send();
};
