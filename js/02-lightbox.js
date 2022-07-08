import { galleryItems } from "./gallery-items.js";
// Change code below this line
const GalleryEl = document.querySelector(".gallery");
const cardMarcup = createElementGalery(galleryItems);

GalleryEl.insertAdjacentHTML("beforeend", cardMarcup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
  close: false,
  overlayOpacity: 0.8,
  fadeSpeed: 200,
});

function createElementGalery(galleryItems) {
  return galleryItems.reduce(
    (acc, { description, original, preview }) =>
      acc +
      `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    `,
    ""
  );
}




