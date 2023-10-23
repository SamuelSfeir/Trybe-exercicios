// Exercício 01
const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperaturesFahrenheit = temperaturesCelsius.map((temperature) => (temperature * 9/5) + 32);

console.log(temperaturesFahrenheit);

// Exercício 02
const numbers = [4, 9, -1, 16, -5, 25];

const raizQuadrada = numbers.map((number) => {
    if (number <= 0) {
        return NaN;
    } else {
        return Math.sqrt(number);
    }
});

console.log(raizQuadrada)

// Exercício 03
//   const formatedBookNames = () => {
//     const formatedBookNamesI = formatedBookNames.map((book) => 
//     (book.name,
//     book.genre,
//     book.author.name
//     ),
//     };

const formatedBookNames = () => books
  .map((book) => (`${book.name} - ${book.genre} - ${book.author.name}`));



// Exercício 04
const nameAndAge = () => {
    return books.map(({ author, releaseYear }) => ({
      author: author.name,
      age: releaseYear - author.birthYear,
    }));
  };


