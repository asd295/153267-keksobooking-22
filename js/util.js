

// 1 Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//2 возвращающает случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomFloat(min, max, numberPlaces) {
  
  const result = Math.random() * (max - min) + min;
  return result.toFixed(numberPlaces);
}


//3 Функция, возвращающая случайный элемент массива.
const getRandomArrayElement = (elements) => {
  const randomArrayIndex = getRandomInteger(0, elements.length - 1);
  return elements[randomArrayIndex];
};

//4 Функция, возвращающая массив случайной длины из значений

const getRandomArray = (array) => {
  let newArray = [];
  array.forEach((element) => {
    if (getRandomInteger(0, 1)) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
};

export {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray};