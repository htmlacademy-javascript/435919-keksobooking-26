const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const adFormHeader =  document.querySelector('.ad-form-header');
const headerPhoto = document.querySelector('.ad-form__field [type=file]');
const previewHeaderPhoto = adFormHeader.querySelector('img');
const previewDefault = previewHeaderPhoto.src;

headerPhoto.addEventListener('change', () => {
  const file = headerPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    file.on('load', () => {
      previewHeaderPhoto.src = URL.createObjectURL(file);
    });
  }
});

const livingPhoto = document.querySelector('.ad-form__upload input[type=file]');
const previewLivingPhotoForm = document.querySelector('.ad-form__photo');
const previewLivingPhoto = document.createElement('img');
previewLivingPhoto.width = '70';
previewLivingPhoto.height = '70';
previewLivingPhotoForm.appendChild(previewLivingPhoto);


livingPhoto.addEventListener('change', () => {
  const file = livingPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    file.on('load', () => {
      previewLivingPhoto.src = URL.createObjectURL(file);

    });
  }
});

const photoRemove = () =>{
  previewHeaderPhoto.src = previewDefault;
};

export {photoRemove};
