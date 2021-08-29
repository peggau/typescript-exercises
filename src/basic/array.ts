const cats: string[] = [
    'Kawaii',
    'Amora',
    'Polenta',
    'Mackenzie',
    'Pikachu',
    'Tofu',
    'Beyonce',
    'Instambul'
]

function showCats(cats: string[]) {
    return `Our cats are: ${cats.join(', ')}`
}

console.log(showCats(cats));
