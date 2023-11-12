// Задача 64: Задайте значение N. Напишите программу, которая выведет все натуральные числа в промежутке от N до 1. Выполнить с помощью рекурсии.

// N = 5 -> "5, 4, 3, 2, 1"
// N = 8 -> "8, 7, 6, 5, 4, 3, 2, 1"

let n = 8;

const getNumbers = (n) => {
  if (n != 1) {
    console.log(n);
  } else if (n === 1) {
    return console.log(n);
  }
  getNumbers(n - 1);
};

getNumbers(n);

// Задача 66: Задайте значения M и N. Напишите программу, которая найдёт сумму натуральных элементов в промежутке от M до N.

// M = 1; N = 15 -> 120
// M = 4; N = 8. -> 30

let m = 10;
let q = 16;

const getSum = (start, end) => {
  sum = 0;
  for (let i = start + 1; i < end; i++) {
    sum += i;
  }
  return sum;
};

console.log(getSum(m, q));

// Задача 68: Напишите программу вычисления функции Аккермана с помощью рекурсии. Даны два неотрицательных числа m и n.

// m = 3, n = 2 -> A(m,n) = 29

const ackermann = (m, n) => {
  if (m < 0 || n < 0) return;
  if (m === 0) {
    return n + 1;
  } else if (n === 0 && m > 0) {
    return ackermann(m - 1, 1);
  }
  return ackermann(m - 1, ackermann(m, n - 1));
};

console.log(ackermann(3, 2));
