// O tipo "void" serve para quando queremos dizer
// que a função de fato não tem retorno.

function principal(): void {
    console.log('execute')
}

// O tipo "never" nunca vai retornar, seja pela
// função que disparou um erro e nossa execução 
// será parada até que o erro seja resolvido, ou
// quando entramos num looping infinito dentro
// da nossa função.

function neverReturns(): never {
    throw new Error('Olá')
}

const a = neverReturns()