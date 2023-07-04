// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
                                                                               // Sua implementação aqui
 return numeros.map((numero) => numero * 2);
};

console.log(dobrarNumeros([1, 2, 3]));
console.log(dobrarNumeros([-2, 0, 5]));
console.log(dobrarNumeros([]));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
                                                                           // Sua implementação aqui

  return numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 
};

console.log(somarValores([1, 2, 3]));
console.log(somarValores([-2, 0, 5]));
console.log(somarValores([]));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
                                                                            // Sua implementação aqui
 return numeros.filter((numero) => numero % 2 === 0);

};

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
console.log(filtrarPares([2, 38, 41, 56]));
console.log(filtrarPares([]));

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};