const TITLES = [
  'title#1',
  'title#2',
  'title#3',
  'title#4',
];

const DESCRIPTIONS = [
  'DESCRIPTION#1',
  'DESCRIPTION#2',
  'DESCRIPTION#3',
  'DESCRIPTION#4',
];


const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const X_MIN = 35.65000;
const X_MAX = 35.70000;
const Y_MIN = 139.70000;
const Y_MAX = 139.80000;

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
Метод toFixed() форматирует число, используя запись с фиксированной запятой.
*/

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
}

// Location

const getRandomLocation = () => {
  const x = getRandomFloat(X_MIN, X_MAX, 5);
  const y = getRandomFloat(Y_MIN, Y_MAX, 5);
  return Number(x) + ', ' + Number(y);
};


const OFFER_COUNT = 10; 

const createOffer = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: getRandomLocation(),
      price: getRandomInteger(10, 2000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 200),
      guests: getRandomInteger(1, 450),
      checkin: getRandomArrayElement(TIME),
      checkout: getRandomArrayElement(TIME),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: +getRandomFloat(35.65000, 35.70000, 5),
      y: +getRandomFloat(139.70000, 139.80000, 5),
    },
  };
};

const createLikeOffers = new Array(OFFER_COUNT).fill(null).map(() => createOffer());

console.log(createLikeOffers);

