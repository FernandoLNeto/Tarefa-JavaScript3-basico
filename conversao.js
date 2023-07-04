// Converte uma string para um número inteiro
function convertToInt(string) {
   return parseInt(string);                             // Sua implementação aqui
}

/**let string = "456";
 * let numero = convertToInt(string);
 * console.log(numero);                                   //Saída: 456
 * console.log(typeof numero);                            //Saída: number , typeof indica o tipo de dado
 * */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Converte um número inteiro para uma string
function convertToString(number) {
 return number.toString();                             // Sua implementação aqui
}

/**let number = 123;
 * let stringNumero = convertToString(number);
 * console.log(stringNumero);                            // Saída: "123"
 * console.log(typeof stringNumero);                     // Saída: "string" , typeof indica o tipo de dado
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Converte um valor para um booleano
function convertToBoolean(value) {
 return Boolean(value);                               // Sua implementação aqui
}

/**let num = 0;
 * let booleano = convertToBoolean(num);
 * console.log(booleano);                                 // Saída: false
 * console.log(typeof booleano);                          // Saída: "boolean", typeof indica o tipo de dado
*/

module.exports = { convertToInt, convertToString, convertToBoolean };