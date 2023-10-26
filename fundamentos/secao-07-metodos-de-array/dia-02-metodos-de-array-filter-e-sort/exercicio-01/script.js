// Exercício 01
const people = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Pedro', age: 20 },
    { name: 'Ana', age: 35 },
  ];

const peopleWithMoreThan30Years = people.filter(({age}) => age >= 30);

console.log(peopleWithMoreThan30Years);

// Exercício 02
const players = [
    { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
    { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
    { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
    { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
    { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
  ];

const filterHighPlayers = players.filter(({height}) => height >=200);

console.log(filterHighPlayers);
