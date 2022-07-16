import { offers } from './arrayOffers.js';
import { renderCard } from './data-generation.js';
import { setDisabledState } from './formadj.js';
import './form.js';
import { toggleInteractive } from './formadj.js';
import './map.js';

setDisabledState();
toggleInteractive();
renderCard(offers[0]);
setDisabledState();
toggleInteractive();

