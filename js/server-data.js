import { renderCard } from './data-generation.js';

const SIMILAR_OFFERS = 10;

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    renderCard(offers.slice(0, SIMILAR_OFFERS));
  });
