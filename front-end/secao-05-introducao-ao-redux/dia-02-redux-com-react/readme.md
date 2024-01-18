O que vamos aprender?
Você vai aprender a utilizar o Redux em suas aplicações React.

Você será capaz de:
Criar um store Redux em aplicações React.

Criar reducers no Redux em aplicações React.

Criar actions no Redux em aplicações React.

Criar dispatchers no Redux em aplicações React.

Conectar Redux aos componentes React.

Adicionar mais de um reducer a uma store.

Por que isso é importante?
Redux é uma ferramenta utilizada para gerenciar o estado de uma aplicação JavaScript.

Antes de entender o porquê da utilização de React com Redux, é preciso compreender o motivo de utilizar uma biblioteca externa para controlar e gerenciar o estado de uma aplicação.

A maioria das bibliotecas, como React e Angular, tem uma forma interna de gerenciar o estado da aplicação sem o auxílio ou a necessidade de uma ferramenta externa. Isso funciona bem para aplicações que têm poucos componentes, mas, à medida que a aplicação cresce, o gerenciamento de estados compartilhados entre componentes torna-se uma tarefa complicada e desgastante.

Em uma aplicação na qual muitos dados são compartilhados entre componentes, pode não ficar nítido onde cada dado deve estar. Além disso, algumas vezes, pode ser criada uma implementação não ideal.

Por exemplo: Em uma aplicação na qual é necessário compartilhar os dados com vários componentes-filho, os dados devem ficar necessariamente no componente-pai.

Aplicações maiores também têm necessidade de compartilhar dados entre componentes que não estão na mesma árvore de componentes. Para o compartilhamento acontecer, os dados devem passar por muitos componentes até chegar ao seu componente-alvo.

Com base nesses exemplos, fica nítido que o gerenciamento de estado torna-se confuso à medida que a aplicação cresce. Por isso, utilizar uma ferramenta externa para gerenciar o estado, como o Redux, facilita o desenvolvimento e o crescimento das aplicações.

