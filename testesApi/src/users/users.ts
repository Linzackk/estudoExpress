export interface User {
    id: number;
    name: string;
    email: string;
}

export let users: User[] = [];
export let nextId: number = 1;

export function resetUsers() {
    users = [];
    nextId = 1;
}

export function atualizarNextId() {
    nextId++
}