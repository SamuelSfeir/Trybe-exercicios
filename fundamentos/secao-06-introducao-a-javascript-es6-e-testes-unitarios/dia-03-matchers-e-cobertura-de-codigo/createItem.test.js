const createItem = require('./createItem');

describe('a função createItem', () => {
    it('cria um item válido', () => {
        const actualItem = createItem('banana', 'kg', 1.99, 20);
        const expectedItem = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
        expect(actual).toEqual(expected);
      });
  it('utiliza zero como quantidade padrão', () => {
    const actualItem = createItem('banana', 'kg', 1.99);
    expect(actualItem).toHaveProperty('quantity', 0);
});
  it.todo('Lança um erro quando não recebe parâmetros');
  it.todo('Lança um erro se o nome do item não é uma string');
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01))
      .toThrow('O preço do item deve ser maior que zero');
  });
  
  it('Lança um erro se o preço é zero', () => {
  
  });
  it.todo('Lança um erro se o preço é zero');
});