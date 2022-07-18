import { renderCard } from './data-generation.js';

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    renderCard(offers);
  });

