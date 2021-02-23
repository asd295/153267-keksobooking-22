import {createLikeOffers} from './data.js';

const HOUSING = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
};

const translitType = (type) => {
  return HOUSING[type];
};

const map = document.querySelector('#map-canvas');

const similarTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarDeclare = createLikeOffers();

const renderAdvance = (declare) => {
  const declareElement = similarTemplate.cloneNode(true);
  declareElement.querySelector('.popup__title').textContent = declare.offer.title;
  declareElement.querySelector('.popup__text--address').textContent = declare.offer.address;
  declareElement.querySelector('.popup__text--price').textContent = `${declare.offer.price} ₽/ночь`;
  declareElement.querySelector('.popup__text--capacity').textContent = `${declare.offer.rooms} комнаты для ${declare.offer.guests} гостей`;
  declareElement.querySelector('.popup__type').textContent = translitType(declare.offer.type);
  declareElement.querySelector('.popup__text--time').textContent = `Заезд после ${declare.offer.checkin}, выезд до ${declare.offer.checkout}`;
  
  const featureList = declareElement.querySelector('.popup__features');
  featureList.innerHTML = '';
  declare.offer.features.forEach(feature => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
    featureList.appendChild(featureElement);
  });

  declareElement.querySelector('.popup__description').textContent = declare.offer.description;

  const photoList = declareElement.querySelector('.popup__photos');
  photoList.innerHTML = '';
  declare.offer.photos.forEach(photo => {
    const photoElement = document.createElement('img');
    photoElement.src = `${photo}`;
    photoElement.height = '40';
    photoElement.width = '45';
    photoList.appendChild(photoElement);
  });

  declareElement.querySelector('.popup__avatar').src = `${declare.author.avatar}`;

  return declareElement
}
map.appendChild(renderAdvance(similarDeclare[0]));