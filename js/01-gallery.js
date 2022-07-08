import { galleryItems } from "./gallery-items.js";
// Change code below this line
const GalleryEl = document.querySelector(".gallery");
const cardMarcup = createElementGalery(galleryItems);

GalleryEl.insertAdjacentHTML("beforeend", cardMarcup);

function createElementGalery(galleryItems) {
  return galleryItems.reduce(
    (acc, { description, original, preview }) =>
      acc +
      `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </div>`,
    ""
  );
}

GalleryEl.addEventListener("click", onImageClick);
function onImageClick(e) {
  e.preventDefault();
  
  if (e.target.nodeName !== "IMG") {
    return;
  }
  //*отримання url оригінального зображення.
  const originalImage = e.target.getAttribute("data-source");

  //*Підключення скрипту і стилів бібліотеки модального вікна
  const instance = basicLightbox.create(
    `<img src="${originalImage}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onESCCloseModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onESCCloseModal);
      },
    }
  );

  instance.show();

  function onESCCloseModal(e) {
    if (e.key === "Escape") {
      instance.close();
      return;
    }
  }
}
console.log(galleryItems);
