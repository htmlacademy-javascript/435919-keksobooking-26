/*const TYPES_APARTMENT = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES_APARTMENT = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_APARTMENT = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MIN_PRICE = 200;
const MAX_PRICE = 2000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 15;

const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

const offerTitle = 'Заголовок';
const offerDescription = 'Здесь могла быть Ваша реклама';

const RENTAL_AD_COUNT = 10;

const DIGIT = 5;

const Lat = {
  MIN: 35.65000,
  MAX: 35.70000
};

const Lng = {
  MIN: 139.70000,
  MAX: 139.80000
};

const COUNT = 10;

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};


const generateCoordinate = (min, max, digit = 5) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return (Math.random() * ((max - min) + min)).toFixed(digit);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [[array[i]], array[j]] = [array[j], array[i]];
  }
  return array;
};

export { TYPES_APARTMENT, TIMES, FEATURES_APARTMENT, PHOTOS_APARTMENT, MIN_PRICE, MAX_PRICE, MIN_ROOMS, MAX_ROOMS, MIN_GUESTS, MAX_GUESTS, offerTitle, offerDescription, RENTAL_AD_COUNT, DIGIT, Lat, Lng, COUNT };
export { generateCoordinate };
export { getRandomNumber };
export { shuffleArray }; */
