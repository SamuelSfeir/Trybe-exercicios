Teste se a função createItem cria um item válido.

Remova o .todo do primeiro it e adicione a função que irá implementar o teste:
Copiar
  it('cria um item válido', () => {
    // seus testes vão aqui!
  });
Construindo o teste, questione:

O que a função createItem recebe como parâmetro?
Para a chamada da função createItem com os argumentos 'banana', 'kg', 1.99 e 20, qual é o resultado esperado?
Considerando como resultado esperado o objeto { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }, qual é o matcher mais adequado?
Remova o .todo e implemente o teste para a chamada da função createItem com os argumentos 'banana', 'kg', 1.99 e 20. Em seguida, verifique se o resultado é o objeto { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 }.

Qual é a cobertura de código atual da função?

Teste se a função createItem utiliza zero como quantidade-padrão.

Construindo o teste, questione:

Qual condição da função createItem implementa essa característica?
Como é possível chamar a função para que ela entre nessa condição?
Para a chamada da função createItem com os argumentos 'banana', 'kg' e 1.99, sem o quarto argumento, qual é o resultado esperado?
Considerando que o resultado esperado é um objeto que tem a propriedade quantity igual a zero, qual é o matcher mais adequado?
Remova o .todo e implemente o teste para a chamada da função createItem com os argumentos 'banana', 'kg' e 1.99. Em seguida, verifique se o resultado tem a propriedade quantity com o valor 0.

Qual é a cobertura de código atual da função? Ela aumentou em comparação com o exercício anterior?

Teste se a função createItem lança algum erro quando não recebe parâmetros.

Implemente o teste para a chamada da função createItem sem argumentos e verifique se é lançada alguma exceção. Qual é o matcher mais adequado? Lembre-se de envolver a chamada da função dentro de outra função para que o Jest possa capturar o erro, conforme orienta a documentação. Não se preocupe no erro que é retornado, vamos fazer isso no próximo exercício.

Analise a cobertura de código. Qual é a cobertura atual?

Teste se a função createItem lança um erro caso o nome do item não seja uma string.

Suponha que o nome do item tenha sido invertido com o preço na chamada da função e considere que foram passados como parâmetros os seguintes elementos: 1.99, 'kg', 'banana' e 20. Assim, essa chamada deve retornar o erro 'O nome do item deve ser uma string'. Afinal, foi passado 1.99 para o parâmetro name. Como é possível verificar se a chamada retorna exatamente esse erro?

Analise a cobertura de código e verifique se as linhas cobertas no exercício anterior mudaram.

Teste se a função createItem lança um erro caso o preço do item seja negativo ou zero.

Crie um teste que, ao chamar a função passando -0.01 para o preço, verifica se a função lança o erro 'O preço do item deve ser maior que zero'.

Analise a cobertura de código.

Crie um teste que, ao chamar a função passando 0.00 para o preço, verifica se a função lança o erro 'O preço do item deve ser maior que zero'.

Analise novamente a cobertura de código. A cobertura não muda, mas foram testados casos diferentes 😉.