// removeItem.test.js

// Importação do arquivo removeItem.js. 
// O ponto de partida do caminho é o arquivo que você está. No caso, removeItem.test.js
const removeItem = require('./removeItem.js');

describe('testa a função removeItem', () => {
  it('deve retornar um array removendo o item correto', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});