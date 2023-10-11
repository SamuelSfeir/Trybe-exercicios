function checkValidRange(numero) {
    try {
      if (typeof numero !== 'number') {
        throw new Error('O valor inserido não é um número.');
      }
  
      if (numero < 1 || numero > 10) {
        throw new Error('O número está fora do intervalo de 1 a 10.');
      }
  
      return true;
    } catch (error) {
      console.error(error.message);
      return false; 
    }
  }
  
 
  