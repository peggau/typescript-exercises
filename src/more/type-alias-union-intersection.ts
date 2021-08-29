type user = {
    nickname: string;
    surname: string;
    birthday: string;
    age?: number;      // ? significa que é opcional
}

const giovanna: user = {
    nickname: 'Giovanna',
    surname: 'Peggau',
    birthday: '17/09/1999'
}

// Os "union types" são marcados pela barra reta,
// indicando que um parâmetro ou retorno será de 
// um tipo OU de outro.

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: logLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('A info message', 'error')
logMessage('A info message', 'info')
logMessage('A info message', 'debug')


// Em "intersection types" usamos &, que é AND
type about = {
    bio: string;
    interests: string[]
}
type profile = user & about;
const userWithProfile: profile = {
    nickname: 'Gi',
    surname: 'Peggau',
    birthday: '17/09/1999',
    bio: 'Oie, meu nome é Gi e eu tenho 21 anos.',
    interests: ['Gatos', 'Magia', 'Música', 'Comida']
}

