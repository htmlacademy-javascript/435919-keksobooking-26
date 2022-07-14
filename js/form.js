const PRICE_MAX = 100000;

const TITLE_LENGTH = {
  min: 30,
  max: 100,
};

const TYPE_OF_HOUSE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const type = adForm.querySelector('#type');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');
const timeIn= adForm.querySelector('#timein');
const timeInField = timeIn.querySelectorAll('option');
const timeOut = adForm.querySelector('#timeout');
const timeOutField = timeOut.querySelectorAll('option');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--error',
});

const validateTitle = (value) => value.length <= TITLE_LENGTH.max && value.length >= TITLE_LENGTH.min;
const validatePrice = (value) => value <= PRICE_MAX && parseInt(value, 10) >= TYPE_OF_HOUSE[type.value];
const getErrorTextPrice = () => parseInt(price.value, 10) < TYPE_OF_HOUSE[type.value] ? `Минимальная цена ${TYPE_OF_HOUSE[type.value]}`: `Максимальная цена ${PRICE_MAX}`;

pristine.addValidator(title, validateTitle, 'От 30 до 100 символов');
pristine.addValidator(price, validatePrice, getErrorTextPrice);


const onTypeOfHouseChange = () => {
  const minPrice = TYPE_OF_HOUSE[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
};

type.addEventListener('change', onTypeOfHouseChange);

type.addEventListener('change', onTypeOfHouseChange);

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


timeIn.addEventListener('change', timeInField.value = timeOutField.value);
timeOut.addEventListener('change', timeOutField.value = timeInField.value);

adForm.addEventListener('submit', (evt) => {

  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
