import jwt from "jsonwebtoken"

const usuariosAuth = [
    {
        id: 1,
        email: "email@email.com",
        senha: "123"
    }
]

export { usuariosAuth }

function login(req, res) {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({
            erro: "Email e senha obrigatorios"
        })
    }

    const usuario = usuariosAuth.find(
        u => u.email === email && u.senha === senha
    )

    if (!usuario) {
        return res.status(401).json({
            erro: "Credenciais Invalidas"
        })
    }

    const token = jwt.sign(
        {
            id: usuario.id,
            email: usuario.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )

    return res.json({
        mensagem: "Login realizado com sucesso",
        token
    })
}

export { login }