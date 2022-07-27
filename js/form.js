import { setDefaultState } from './map.js';
import { makeRequest } from './api.js';
import { removePhoto } from './photo.js';
import { isEscapeKey } from './util.js';

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

const changePlaceHolder = () => {
  const minPrice = TYPE_OF_HOUSE[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};

const changeSlider = () => {
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

const onTypeOfHouseChange = () => {
  changeSlider();
  changePlaceHolder();
};

type.addEventListener('change', onTypeOfHouseChange);

sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});

price.addEventListener('change', (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
});

const NumberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guest) => {
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

const successTemlate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemlate.cloneNode(true);

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)){
    successElement.remove();
    document.removeEventListener('keydown', onSuccessEscKeydown);
  }
};

const onSuccess = () => {
  document.body.append(successElement);
  adForm.reset();
  setDefaultState();
  sliderElement.noUiSlider.reset();

  successElement.addEventListener('click', () => {
    successElement.remove();
  });

  document.addEventListener('keydown', onSuccessEscKeydown);
};

const errorTemlate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemlate.cloneNode(true);
const errorButton = document.querySelector('.error__button');

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)){
    errorElement.remove();
    document.removeEventListener('keydown', onErrorEscKeydown);}
};

const onError = () => {
  document.body.append(errorElement);

  document.addEventListener('click', () => {
    errorElement.remove();
  });

  document.addEventListener('keydown', onErrorEscKeydown);

  errorButton.addEventListener('click', () => {
    errorElement.remove();
  });
};

resetButton.addEventListener('click', () => {
  setDefaultState();
  sliderElement.noUiSlider.reset();
  removePhoto();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    makeRequest(onSuccess, onError, 'POST', new FormData(adForm));
  }
});
