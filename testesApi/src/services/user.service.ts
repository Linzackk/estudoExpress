import { users, nextId, User, atualizarNextId } from "../users/users";


export function listUsers() {
    return users;
}

export function createUser(name: string, email: string) {
    if (!email || !name) {
        throw new Error("Dados Inválidos");
    }

    const user: User = {
        id: nextId,
        name,
        email
    };

    atualizarNextId()

    users.push(user);
    return user;
}

export function updateUser(id: number, name: string, email: string) {
    const user = users.find(u => u.id === id);

    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    return user;
}

export function deleteUser(id: number) {
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        throw new Error("Usuário não encontrado");
    }

    users.splice(index, 1);
}