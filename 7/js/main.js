import { renderCard } from './data-generation.js';
import { setDisabledState} from './formadj.js';
import './form.js';
import { toggleInteractive } from './formadj.js';
import { offers } from './arrayOffers.js';

setDisabledState();
toggleInteractive();
renderCard();
renderCard(offers[0]);
