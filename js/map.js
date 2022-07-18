import { toggleInteractive, setDisabledState } from './formadj.js';
import { offers } from './arrayOffers.js';
import { renderCard } from './data-generation.js';

const adForm = document.querySelector('.ad-form');
const addressField = adForm.querySelector('#address');

const TOKIO_COORDINATES = {
  lat: 35.681729,
  lng: 139.753927,
};
const ZOOM_LEVEL = 10;
const FIXED_NUMBER = 5;

const map = L.map('map-canvas')
  .on('load', () => {
    toggleInteractive();
    setDisabledState();
  })
  .setView(TOKIO_COORDINATES, ZOOM_LEVEL);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  TOKIO_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  });

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  addressField.value = `${lat.toFixed(FIXED_NUMBER)}, ${lng.toFixed(FIXED_NUMBER)}`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarker = (offer) => {
  const marker = L.marker(
    {
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: icon,
      keepInView: true,
    },
  );
  marker
    .addTo(map)
    .bindPopup(renderCard(offer));
};

offers.forEach(createMarker);

const setDefaultState = () => {
  mainPinMarker.setLatLng(TOKIO_COORDINATES);
  map.setView(TOKIO_COORDINATES, ZOOM_LEVEL);
  map.closePopup();
};

export {setDefaultState};

/*
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(TOKIO_COORDINATES);
  map.setView(TOKIO_COORDINATES, ZOOM_LEVEL);
  map.closePopup();
});*/
