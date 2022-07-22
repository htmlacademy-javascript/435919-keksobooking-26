const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const headerPhoto = document.querySelector('.ad-form__field [type=file]');
const previewheaderPhoto = document.querySelector('.ad-form-header__preview__img');

headerPhoto.addEventListener('change', () => {
  const file = headerPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewheaderPhoto.src = URL.createObjectURL(file);
  }
});


const livingPhoto = document.querySelector('.ad-form__upload input[type=file]');


const previewLivingPhotoForm = document.querySelector('.ad-form__photo');
const previewLivingPhoto = previewLivingPhotoForm.createElement('img');
previewLivingPhoto.classList.add('ad-form__photo__img');
previewLivingPhotoForm.appendChild(previewLivingPhoto);


livingPhoto.addEventListener('change', () => {
  const file = livingPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewLivingPhoto.src = URL.createObjectURL(file);
  }
});

