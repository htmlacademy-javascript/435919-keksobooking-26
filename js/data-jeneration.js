/* В список .popup__features выведите все доступные удобства в объявлении.

o	В блок .popup__photos выведите все фотографии из списка offer.photos.
Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.

o	Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание.
В этом случае соответствующий блок в карточке скрывается.
*/

import { offers } from './arrayOffers.js';

const types = {
  flat: {
    ru:'Квартира'
  },
  bungalow: {
    ru:'Бунгало'
  },
  house: {
    ru:'Дом'
  },
  palace: {
    ru:'Дворец'
  },
  hotel: {
    ru:'Отель'
  },
};


const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const offerCardElement = document.querySelector('#map-canvas');


const renderCard = (data) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  const offerTitle = offerElement.querySelector('.popup__title').textContent;
  if (data.offer.title) {offerTitle.textContent = data.offer.title;} else { offerTitle.remove();}

  const offerTextAdress = offerElement.querySelector('.popup__text--address').textContent;
  if (data.offer.address) {offerTextAdress.textContent = data.offer.address;} else {offerTextAdress.remove();}

  offerElement.querySelector('.popup__type').textContent  = types[data.offer.type].ru;

  const offerType = offerElement.querySelector('.popup__type').textContent;
  if (data.offer.type){offerType.textContent = types[data.offer.type].ru;} else {offerType.remove();}

  const offerTextPrice = offerElement.querySelector('.popup__text--price').textContent;
  if (data.offer.price) {offerTextPrice.textContent = `${data.offer.price} ₽/ночь`;} else {offerTextPrice.remove();}

  const offerTextCapacity = offerElement.querySelector('.popup__text--capacity').textContent;
  if (data.offer.guests) {offerTextCapacity.textContent =`${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;} else {offerTextCapacity.remove();}

  const offerTextTime = offerElement.querySelector('.popup__text--time').textContent;
  if (data.offer.checkin) {offerTextTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;} else{offerTextTime.remove();}

  offerElement.querySelectorAll('.popup__features').textContent  = offers.features; //?

  const offerDescription = offerElement.querySelector('.popup__description').textContent;
  if(data.offer.description){offerDescription.textContent = data.offer.description;} else {offerDescription.remove();}

  offerElement.querySelectorAll('.popup__photos') .textContent = data.offer.photos; //?

  offerElement.querySelector('.popup__avatar') .textContent = data.offer.author.avatar; //?

  offerCardElement.appendChild(offerElement);
};

renderCard(offers[0]);

export {renderCard};
