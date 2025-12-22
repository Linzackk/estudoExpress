import jwt from "jsonwebtoken"

export const autenticarToken = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({
            erro: "Token nao informado"
        })
    }
    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (erro, usuario) => {
        if (erro) {
            return res.status(403).json({
                erro: "Token invalido ou expirado"
            })
        }

        req.usuario = usuario
        next()
    })
}