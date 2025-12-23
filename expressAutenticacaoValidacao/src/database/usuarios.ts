import bcrypt from "bcrypt";

export const usuarios = [
    {
        id: 1,
        email: "teste@email.com",
        senha: bcrypt.hashSync("123456", 10),
        perfil: "admin"
    },
    {
        id: 2,
        email: "teste2@email.com",
        senha: bcrypt.hashSync("123456", 10),
        perfil: "user"
    },
];