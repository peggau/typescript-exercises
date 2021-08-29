// Ele pode passar seguranças adicionais em relação
// ao "any".

let information: unknown;
let completeInformation: string;

completeInformation = information;

// O unknown não permite atribuir um tipo não conhecido
// ao tipo string, o que seria possível usando o
// any.