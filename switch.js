// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    switch (number) {
        case 0:
          return "Domingo";
          break;

        case 1:
          return "Segunda-feira";
          break;

        case 2:
          return "Terça-feira";
          break;  
                                                                                  // Sua implementação aqui
        case 3:
          return "Quarta-feira";
          break;

        case 4:
          return "Quinta-feira";
          break;

        case 5:
          return "Sexta-feira";
          break;

        case 6:
          return "Sábado";
          break;

        default:
          return "Número inválido. Por favor, insira um número entre 0 e 6.";
          break;
      };                                        
};

//console.log(retornaDiaSemana(9))




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
 switch (code) {

    case "A":
        return  10.99;
        break;

    case "B":
        return  5.99;                                                        // Sua implementação aqui
        break;
            
    case "C":
        return  7.5;
        break;    

    default:
        return "Código Inválido";
        break;    
 }                                                                             
}

//console.log(retornaPrecoProduto("D"))  saida "Código Inválido"




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
 switch (type){

    case "Eletrônicos":
        return "Categoria: Tecnologia";
        break;
    
    case "Roupas":
        return "Categoria: Moda";
        break;

    case "Alimentos":
        return "Categoria: Alimentação";
        break;

    default:
        return "Categoria desconhecida";
        break;
    
 }                                                     // Sua implementação aqui
}

//console.log(retornaCategoriaProduto("carro"))

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };