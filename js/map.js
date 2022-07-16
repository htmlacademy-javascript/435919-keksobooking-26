/* 2. С помощью полученных обновлений (стили, изображения и скрипты, необходимые для Leaflet)
от Кексобота реализуйте отображение карты и дальнейший переход страницы в активное состояние после инициализации карты.
Координаты центра Токио найдите самостоятельно

import { renderCard } from './data-generation.js';
import { renderCard } from './data-generation.js';
import { setDisabledState } from './formadj.js';
import { toggleInteractive } from './formadj.js';*/

import { offers } from './arrayOffers.js';
const adForm = document.querySelector('.ad-form');
const addressField = adForm.querySelector('#address');
const resetButton = adForm.querySelector('.ad-form__reset');

const TOKIO_COORDINATES = {
  lat: 35.681729,
  lng: 139.753927,
};
const ZOOM_LEVEL = 10;

const map = L.map('map-canvas')
  .setView(TOKIO_COORDINATES, ZOOM_LEVEL);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


//3. Напишите код, который будет добавлять на карту специальную, «главную», метку. Иконка для метки есть в обновлении, файл main-pin.svg.
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
  addressField.value = evt.target.getLatLng();
});


const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

offers.forEach(({ lat, lng }) => {
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map);
});


/* 4. Реализуйте с помощью API карт выбор адреса путём перемещения главной метки.
Ручное редактирование поля запрещено, однако поле должно быть доступно, чтобы значение отправлялось на сервер с формой.

/* 5. Напишите код, который добавит на карту метки объявлений, «обычные». Иконка для меток есть в обновлении, файл pin.svg.
Для отображения используйте данные для разработки, которые мы генерировали несколько заданий назад.

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

offers.forEach(({ lat, lng }) => {
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(renderCard(offers));
});
*/
// ТЗ 2.5.

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(TOKIO_COORDINATES);
  map.setView(TOKIO_COORDINATES, ZOOM_LEVEL);
});

