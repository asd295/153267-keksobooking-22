import {createLikeOffers} from './data.js';


const map = document.querySelector('#map-canvas');

const similarTemplate = document.querySelector('#card').content.querySelector('.popup');


const similarDeclare = createLikeOffers();


const similarListFragment = document.createDocumentFragment();


similarDeclare.forEach(({author, offer})=> {
  const declareElement = similarTemplate.cloneNode(true);
  declareElement.querySelector('.popup__title').textContent = offer.title;
  declareElement.querySelector('.popup__text--address').textContent = offer.address;
  declareElement.querySelector('.popup__text--capacity').textContent = offer.rooms;
});

similarTemplate.appendChild(similarListFragment);