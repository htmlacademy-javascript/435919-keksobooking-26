const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formElements = document.querySelectorAll('#housing-type, #housing-price, #housing-rooms, #housing-guests, .ad-form-header, .ad-form__element, .ad-form__slider');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('mapfilters--disabled');
  formElements.forEach((element) => {element.disabled = true;});
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  formElements.forEach((element) => {element.disabled = false;});
};

export{disableForm};
export{enableForm};
