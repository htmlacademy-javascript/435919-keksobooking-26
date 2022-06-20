const TYPES_APARTMENT = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
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
}

const Lng = {
    MIN: 139.70000,
    MAX:139.80000
}


const getRandomNumber = (min, max) => {
    if (min < 0 || max < 0){
        return -1;}

    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max-min + 1) + min);
};

const generateCoordinate = (min, max, digit = 5) => {
    if (min < 0 || max < 0){
        return -1;
    }
    if (min > max) {
        [min, max] = [max, min];
    }

    return (Math.random() * ((max-min) + min)).toFixed(digit);
}

const shuffleArray = (array) => {
    for (let i = array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [[array[i]], array[j]] = [array[j], array[i]];
    }
    return array;
    };


const COUNT = 10;
const offers = [];


const addOffer = (index) => ({
    author: {
        avatar: `img/avatars/user${(index+1)<10 ? 0 : ''}${index +1}.png`
    },

    offer: {
        title: offerTitle,
        address: `${Lat}, ${Lng}`, 
        price: getRandomNumber(MIN_PRICE, MAX_PRICE),
        type: TYPES_APARTMENT[getRandomNumber(0, (TYPES_APARTMENT.length-1))], 
        rooms: getRandomNumber(MIN_ROOMS, MAX_ROOMS),
        guest: getRandomNumber(MIN_GUESTS, MAX_GUESTS),
        checkin: TIMES[getRandomNumber(0, (TIMES.length-1))], 
        checkout: TIMES[getRandomNumber(0, (TIMES.length-1))],
        features: shuffleArray(FEATURES_APARTMENT).slice(0, getRandomNumber(0, FEATURES_APARTMENT.length)), 
        description: offerDescription,
        photos: shuffleArray(PHOTOS_APARTMENT).slice(0, getRandomNumber(0, PHOTOS_APARTMENT.length)),
    },

    location: {
        lat: generateCoordinate(Lat.MIN, Lat.MAX, 5),
        lng: generateCoordinate(Lng.MIN, Lng.MAX, 5)
    }
});

const addOffers = () => {
for(let i = 0; i < COUNT; i++){
    offers.push(i); 
        }
};
 
addOffers();
export {arrayOffers}
