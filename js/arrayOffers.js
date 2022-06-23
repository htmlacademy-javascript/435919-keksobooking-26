import {getRandomNumber} from './util.js'
import {generateCoordinat} from './util.js'
import {shuffleArray} from './util.js'
import {TYPES_APARTMENT, TIMES, FEATURES_APARTMENT, PHOTOS_APARTMENT, MIN_PRICE, MAX_PRICE, MIN_ROOMS, MAX_ROOMS, MIN_GUESTS, MAX_GUESTS, offerTitle, offerDescription, RENTAL_AD_COUNT, DIGIT, Lat, Lng, COUNT} from './data.js'

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