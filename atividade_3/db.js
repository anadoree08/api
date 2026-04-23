let usuarios = [];

let usuarios = [];

function buscarUsuarios() {
    return usuarios;
}

function adicionarUsuario(nome) {
    const novo = {
        id: usuarios.length,
        nome: nome
    };

    usuarios.push(novo);
    return novo;
}

function deletarUsuario(id) {
    if (id < 0 || id >= usuarios.length) {
        return null;
    }

    return usuarios.splice(id, 1)[0];
}