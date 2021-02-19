import {getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray} from './util.js';

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

const createLikeOffers = () => new Array(OFFER_COUNT).fill(null).map(() => createOffer());

console.log(createLikeOffers);

export {createLikeOffers};

