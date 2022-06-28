/*
o	В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
	Квартира для flat
	Бунгало для bungalow
	Дом для house
	Дворец для palace
	Отель для hotel

o	В блок .popup__photos выведите все фотографии из списка offer.photos.
Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.

o	Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание.
В этом случае соответствующий блок в карточке скрывается.

*/

import { offers } from './arrayOffers.js';

const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup'); //нашла шаблон, обращаюсь к его содержимому

const offerCardElement = document.querySelector('#map-canvas'); // нашла место куда вставлять карточку

const renderCard = () => {
  const offerElement = similarOfferTemplate.cloneNode(true); // клонирую шаблон, далее записываю в шаблон
  offerElement.querySelector('.popup__title').textContent  = offers.title; // offers? как сделать this
  offerElement.querySelector('.popup__text--address').textContent  = offers.address;
  offerElement.querySelector('.popup__type').textContent  = offers.type; //?
  if ()
  offerElement.querySelector('.popup__text--price').textContent = `${offers.price} ₽/ночь`;
  offerElement.querySelector('.popup__text--capacity').textContent = `${offers.rooms} комнаты для ${offers.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offers.checkin}, выезд до ${offers.checkout}`;
  offerElement.querySelectorAll('.popup__features').textContent  = offers.features;
  offerElement.querySelector('.popup__description').textContent  = offers.description;
  offerElement.querySelector('.popup__type').textContent  = offers.type;
  offerElement.querySelectorAll('.popup__photos') .textContent = offers.photos; //?
  offerElement.querySelector('.popup__avatar') .textContent = offers.author.avatar; //?
  offerCardElement.appendChild(offerElement); // вставляю элемент
};

renderCard(offers[0]);

export {renderCard};
