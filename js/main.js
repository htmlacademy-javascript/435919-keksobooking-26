import { offers } from './arrayOffers.js';
import { renderCard } from './data-generation.js';
import { setDisabledState} from './formadj.js';
import './form.js';
import './map.js';
import { toggleInteractive } from './formadj.js';


setDisabledState();
toggleInteractive();
renderCard(offers[0]);
setDisabledState();
toggleInteractive();
