/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
Метод toFixed() форматирует число, используя запись с фиксированной запятой.
*/

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

//возвращающает случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomFloat(min, max, numberPlaces) {
  return (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

  return result.toFixed(numberPlaces);
};