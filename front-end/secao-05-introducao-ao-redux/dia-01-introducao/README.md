Introdução – O que é Redux?
O Redux é uma biblioteca de gerenciamento de estado global que pode ser utilizada com algum framework Front-end ou com JavaScript puro.

Com Redux, você consegue ter um estado global para sua aplicação. Uma vez definido esse estado, você pode ler e escrever as informações a partir de qualquer lugar (ou qualquer componente, em caso de usar Redux com React).

As tarefas de leitura e escrita no estado global são feitas de forma bem estruturada, em que o Redux define uma “receita” a ser seguida. Por essa razão, ele é considerado uma biblioteca “opinativa” (tradução de opinionated, que indica a presença de regras bem definidas de como trabalhar).

O que vamos aprender?
Hoje vamos aprender sobre a biblioteca do Redux, que ajuda no gerenciamento de estado e é amplamente usada por pessoas que desenvolvem em React.

Devido ao fato de o Redux ter uma ligação muito forte com o React, é comum associá-lo com o React. Entretanto, é possível usar o Redux com qualquer framework Front-end de sua preferência ou até mesmo com JavaScript puro.

Hoje você usará o Redux com JavaScript puro e TypeScript para entender os conceitos da biblioteca.

Você será capaz de:
Criar uma store para armazenar o estado de uma aplicação.
Utilizar Reducers, Actions e a função dispatch() para atualizar a store.
Utilizar a função getState() para ler dados da store.
Por que isso é importante?
Imagine que você precise passar informações entre diferentes componentes em React e que essas informações descem vários níveis na hierarquia de componentes. Você concorda que, quando o estado é guardado por um componente, essa manipulação vai ficando cada vez mais difícil?

Suponha que você deva repassar o dado de um componente X para um componente Y que está 10 níveis abaixo da hierarquia de componentes. Você precisa passar esse dado por todos os componentes do meio, mesmo quando nenhum deles o utiliza. Esse problema se chama prop drilling, e você aprenderá a resolvê-lo por meio do Redux! 🚀

Quando você, enquanto pessoa desenvolvedora, passa a adotar uma abordagem como a do Redux, significa que está levando a organização de seu código a outro nível e que se preocupa em como transitar as informações entre os componentes e deixar seu código mais organizado e com maior confiabilidade.