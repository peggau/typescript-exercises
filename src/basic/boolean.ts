let active: boolean;

active: true

function userStatus(status: boolean) {
    if(status) {
        return `The user is active.`
    } else {
        return `The user is not active.`
    }
}

userStatus(false);

// Resultaria na mensagem de que o usuário
// não está ativo.