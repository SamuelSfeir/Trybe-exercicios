/* -- Parte 1 -- */

const player= {
    name :'Marta',
    lastName :'Silva',
    age :34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]

}


/* -- Parte 2 -- */



const message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`;
console.log(message);


/* -- Parte 3 -- */

const achievements = player.bestInTheWorld.length
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${achievements} vezes.`);

