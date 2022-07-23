const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const previewMuffin  = 'img/muffin-grey.svg';

const headerPhoto = document.querySelector('.ad-form__field [type=file]');
const previewHeaderPhoto = document.querySelector('.ad-form-header__preview__img');

headerPhoto.addEventListener('change', () => {
  const file = headerPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    file.on('load', previewHeaderPhoto.src = URL.createObjectURL(file));
  }
});

const livingPhoto = document.querySelector('.ad-form__upload input[type=file]');
const previewLivingPhotoForm = document.querySelector('.ad-form__photo');
const previewLivingPhoto = document.createElement('img');
previewLivingPhoto.width = '70';
previewLivingPhoto.height = '70';
previewLivingPhoto.style.padding = '12px 12px';
previewLivingPhotoForm.appendChild(previewLivingPhoto);
previewLivingPhoto.src = '';


livingPhoto.addEventListener('change', () => {
  const file = livingPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    file.on('load',previewLivingPhoto.src = URL.createObjectURL(file));
  }
});

const photoRemove = () =>{
  previewHeaderPhoto.src = previewMuffin;
  previewLivingPhoto.src.innerHTML = '';
};

export {photoRemove};
