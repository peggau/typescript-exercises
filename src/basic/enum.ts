// Forma mais ordenada e legível, de forma humana
// de trabalhar com números. Por padrão, são valores
// numéricos, mas podem ser personalizados.

enum permission {
    admin,
    editor,
    commom, 
}

enum color {
    red = '#FF0000',
    black = '#000'
}

const users = {
    profile: color.red,
    level: permission.admin,
};

console.log(users);
