// Lógica 

export const usuarios = [
    {id: 1, "nome": "Jao", "idade": 20},
    {id: 2, "nome": "Jao", "idade": 20},
    {id: 3, "nome": "Jao", "idade": 20},
    {id: 4, "nome": "Jao", "idade": 20},
    {id: 5, "nome": "Jao", "idade": 20},
]

function gerarID() {
    const tamanho = usuarios.length - 1
    if (tamanho === -1) {
        return 1
    }
    else {
        return usuarios[tamanho]["id"] + 1
    }
}

export function criarUsuario(req, res) {
    const { nome, idade } = req.body

    const usuario = {id: gerarID(), nome, idade}
    usuarios.push(usuario)

    return res.status(201).json({
        mensagem: "Usuario criado.",
        usuario
    })
}

export function verUsuarios(req, res) {
    return res.status(200).json(usuarios)
}

export function atualizarUsuario(req, res) {
    const id = Number(req.params.id)
    const { nome, idade } = req.body

    const usuario = usuarios.find(u => u.id === id)

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuario nao encontrado"
        })
    }
    if (nome) usuario.nome = nome
    if (idade) usuario.idade = idade

    return res.json({
        mensagem: "Usuario atualizado",
        usuario
    })
}

export function deletarUsuario(req, res) {
    const id = Number(req.params.id)

    const index = usuarios.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({
            erro: "Usuario nao encontrado"
        })
    }

    const usuarioRemovido = usuarios.splice(index, 1)

    return res.json({
        mensagem: "Usuario removido",
        usuario: usuarioRemovido[0]
    })
}
