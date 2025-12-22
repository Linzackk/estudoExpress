export function validarCriacaoUsuario(req, res, next) {
    if (verificarBodyVazio(req, res)) {return}

    const { nome, idade } = req.body

    if (!nome || !idade) {
        return res.status(400).json({
            erro: "Nome e Idade sao Obrigatorios"
        })
    }
    next()
}

export function validarAtualizacaoUsuario(req, res, next) {
    if (verificarBodyVazio(req, res)) {return}

    const { nome, idade } = req.body

    if (!nome && !idade) {
        return res.status(400).json({
            erro: "informe pelo menos um campo para atualizar"
        })
    }

    next()
}

function verificarBodyVazio(req, res) {
    if (req.body === undefined) {
        return res.status(400).json({
            erro: "Body vazio"
        })
    }
    else {return false}
}