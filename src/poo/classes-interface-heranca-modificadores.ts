class userName {
    public nickname;
    public age;

    constructor(nickname: string, age: number) {
        this.nickname = nickname;
        this.age = age;
    }
}

class playerInfo extends userName {
    public game;

    constructor(name: string, age: number, game: string) {
        super(name, age);
        this.game = game;
    }

    currentGame() {
        return `Estou jogando ${this.game} no momento.`
    }
}

const players = new playerInfo('Gi', 21, 'The Witcher');
console.log(players.currentGame())



// Método static

class gameInfo extends userName {
    public game;

    constructor(name: string, age: number, game: string) {
        super(name, age);
        this.game = game;
    }

    currentGame() {
        return `Estou jogando ${this.game} no momento.`
    }

    static currentHour() {
        return Date();
    }
}

const games = new gameInfo('Gi', 21, 'The Witcher');
console.log(gameInfo.currentHour())


// Método "private", "protected" ou "public"
// public - acessível de forma geral, dentro e 
// fora da classe.
class Jogo {
    public nome;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const witcher = new Jogo('The Witcher 3');
console.log(witcher.nome);

// private - acessível somente dentro da classe
// onde o campo foi criado.
class Jogo2 {
    private nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    sayTheName() {
        return `The name of the game is: ${this.nome}`;
    }
}

const bloodborne = new Jogo2('Bloodborne');
console.log(bloodborne.sayTheName);

// protected - acessível dentro da classe ou
// das subclasses onde o campo foi criado.
class Jogo3 {
    protected nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    sayTheName() {
        return `The name of the game is: ${this.nome}`;
    }
}

class gameDescription extends Jogo3 {
    private description;

    constructor(nome: string, description: string) {
        super(nome);
        this.description = description;
    }
}

const alien = new gameDescription('Alien', 'É um jogo muito tenso.');
console.log(alien.sayTheName);



// interface - caso ela seja redeclarada, a primeira
// e qualquer outra que for declarada serão mergeadas,
// então ficariam unidas.
interface IGameDescription {
    nome: string;
    description: string;
    sayTheName(): string;
}

// implements
class Game1 {
    public nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    sayTheName() {
        return `The name of the game is: ${this.nome}`;
    }
}

class gameTypes extends Game1 implements IGameDescription {
    public description;

    constructor(nome: string, description: string) {
        super(nome);
        this.description = description;
    }
}

const whatGame = new gameDescription('Barbie Girl', 'É um jogo cheio de moda.');
console.log(whatGame.sayTheName);
