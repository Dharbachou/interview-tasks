/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

арифметическая прогрессия
*/

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );

function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );
