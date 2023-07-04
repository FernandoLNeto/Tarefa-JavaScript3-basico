// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
 if (n == 1){
  return 1;
 }                                                                    // 
 else {
  return n + somaNumeros(n - 1);
 }

 }   
     
 //console.log(somaNumeros(4));      
 
 


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Verifica se um número é par
function ehPar(number) {
 return number % 2 == 0;                                              // Resto da divisão igual a zero, logo o numero é par
}

//console.log(ehPar(8));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function fibonacci(n) 
  {
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {                                              
      var s = fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);                  // Mostra os termos da sequencia de fibonacci 
      return s;
    }
  };
  
  // console.log(fibonacci(10));

  
  


                                                          


module.exports = { somaNumeros, ehPar, fibonacci };