const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
  };

  let result = 0;
  
  for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
  };
  
  console.log(result);

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

let average = sum / numbers.length;

console.log(average);

let result2 = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result2 += numbers[index];
};

result2 = result2 / numbers.length;

if (result2 > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
};


let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
};

console.log(higherNumber);

let result3 = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result3 += 1;
  }
};

if (result3 === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(result3);
};