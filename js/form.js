import { setDefaultState } from './map.js';
import { makeRequest } from './api.js';

const PRICE_MAX = 100000;

const TITLE_LENGTH = {
  min: 30,
  max: 100,
};

const TYPE_OF_HOUSE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const type = adForm.querySelector('#type');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const sliderElement = document.querySelector('#slider');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');
const formTime = adForm.querySelector('.ad-form__element--time');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const resetButton = adForm.querySelector('.ad-form__reset');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--error',
});

const validateTitle = (value) => value.length <= TITLE_LENGTH.max && value.length >= TITLE_LENGTH.min;
const validatePrice = (value) => value <= PRICE_MAX && parseInt(value, 10) >= TYPE_OF_HOUSE[type.value];
const getErrorTextPrice = () => parseInt(price.value, 10) < TYPE_OF_HOUSE[type.value] ? `Минимальная цена ${TYPE_OF_HOUSE[type.value]}` : `Максимальная цена ${PRICE_MAX}`;

pristine.addValidator(title, validateTitle, 'От 30 до 100 символов');
pristine.addValidator(price, validatePrice, getErrorTextPrice);

// настройки слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 1000,
    max: 100000,
  },
  start: 1000,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

// при изменении типа жилья меняется плейсхолдер цены
const onTypeOfHouseChangePlaceHolder = () => {
  const minPrice = TYPE_OF_HOUSE[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};

type.addEventListener('change', onTypeOfHouseChangePlaceHolder);

// при изменении типа жилья меняются настройки слайдера

const onTypeOfHouseChangeSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: TYPE_OF_HOUSE[type.value],
      max: 100000,
    },
    start: TYPE_OF_HOUSE[type.value],
    step: 100,
    connect: 'lower',
  });
};

type.addEventListener('change', onTypeOfHouseChangeSlider);

// меняю слайдер - меняется значение цены
sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});

// меняю значение цены - меняется слайдер, нужно ли менять событие?
price.addEventListener('change', (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
});

// количество комнат и количество мест
const NumberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guest) => {
    /*Цель найти  и деактивировать ненужные опции количеств комнат.
    В объекте, в котором соотносятся количество гостей и комнат, по ключу, который равен количеству гостей, проходимся по массивам,
    которые состоят из опций количества комнат.
    В массивах, в которых мы не находим элемент со значением введенного количества гостей, мы возвращаем -1*/
    const isDisabled = (NumberOfGuests[roomValue].indexOf(guest.value) === -1);
    guest.selected = NumberOfGuests[roomValue][0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
};

validateRooms();

const onRoomNumberChange = () => {
  validateRooms();
};

roomNumber.addEventListener('change', onRoomNumberChange);

formTime.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
});

//появление cообщения об успехе, закрытие сообщения
const onSuccess = () => {
  const successTemlate = document.querySelector('#success').content.querySelector('.success');// Находим фрагмент с содержимым темплейта и в нем находим нужный элемент
  const successElement = successTemlate.cloneNode(true); // клонируем этот элемент
  document.body.append(successElement);
  setDefaultState();

  successElement.addEventListener('click', () => { // удаляем сообщение по клику на сообщение
    successElement.remove();
    setDefaultState();
  });

  document.addEventListener('keydown', (evt) => {// удаляем сообщение по Esc
    if (evt.key === 'Escape') {
      successElement.remove();
      setDefaultState();
    }
  });
};

const errorTemlate = document.querySelector('#error').content.querySelector('.error');// Находим фрагмент с содержимым темплейта и в нем находим нужный элемент
const errorElement = errorTemlate.cloneNode(true); // клонируем этот элемент
const errorButton = document.querySelector('.error__button');

// cообщение об ошибке
const onError = () => {
  document.body.append(errorElement);

  document.addEventListener('click', () => { // удаляем по клику на произвольную область экрана
    errorElement.remove();
  });

  document.addEventListener('keydown', (evt) => {// удаляем cообщение по Esc
    if (evt.key === 'Escape') {
      errorElement.remove();
    }
  });

  errorButton.addEventListener('click', () => { // удаляем сообщение по клику
    errorElement.remove();
  });
};

resetButton.addEventListener('click', () => {
  setDefaultState();
  sliderElement.noUiSlider.updateOptions({// не получается через end, переустановила
    range: {
      min: 0,
      max: 100000,
    },
    start: 1000,
    step: 100,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
});


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    makeRequest(onSuccess, onError, 'POST', new FormData(adForm));
  }
});

