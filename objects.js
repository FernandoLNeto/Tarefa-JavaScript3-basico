// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {

    const perimetro = 2 * (retangulo.largura + retangulo.altura);
    const area = retangulo.largura * retangulo.altura;
    return { perimetro, area };                                            // Sua implementação aqui
}

const retangulo = {
    largura: 3,
    altura: 4,
};

console.log(calcularRetangulo(retangulo));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    const maior = 18;

    if (pessoa.idade >= maior) {
        return "Você tem a idade mínima nescessária";                                                    // Sua implementação aqui
    } 

    else {
        return "Você ainda não atingiu a idade mínima nescessária";
    }; 
}

let pessoa = {

    nome: 'John',
    idade: 6,
    cidade: 'NeW York',
};

console.log(ehAdulto(pessoa));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {

   const { nome, idade, cidade } = obj;
   const frase = `${nome} com idade de ${idade} anos, e natural de ${cidade}`;                              // Sua implementação aqui 
   return frase;

}

const usuario = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
  };

console.log(concatenaValores(usuario))

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
