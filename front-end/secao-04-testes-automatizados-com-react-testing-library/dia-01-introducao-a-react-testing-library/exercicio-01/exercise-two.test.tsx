// src/test/exercise-two.test.tsx
describe('Testa a aplicação, e o input', () => {
    test('Testa a adição de vários itens a aplicação', async () => {
      const listTodo = ['Realizar CR', 'Ler Post no Medium'];
  
      render(<App />);
  
      // Começamos selecionando nosso input e nosso botão.
      const inputTask = screen.getByLabelText('Tarefa:');
      const btnAdd = screen.getByText('Adicionar');
  
      // Então, pegamos os valores de nosso array de tarefas 'listTodo' e, para cada um desses valores, disparamos os eventos de digitar no input e de clicar no botão com a biblioteca 'userEvent'.
  
      await userEvent.type(inputTask, listTodo[0]);
      await userEvent.click(btnAdd);
  
      await userEvent.type(inputTask, listTodo[1]);
      await userEvent.click(btnAdd);
  
      // Por fim, iteramos mais uma vez sobre nosso array. Dessa vez, vamos verificar se, para cada um dos valores, nós podemos selecioná-los com a query 'getByText' e encontrá-los em tela com o matcher 'toBeInTheDocument'
      listTodo.forEach((task) => {
        const currentTask = screen.getByText(task);
        expect(currentTask).toBeInTheDocument();
      });
    });
  });