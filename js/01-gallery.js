import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEL = document.querySelector(".gallery");

const createGallery = (galleryItems) =>
  galleryItems.map((item) => {
    const galleryItemsEl = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    galleryEL.insertAdjacentHTML("beforeend", galleryItemsEl);
  });

createGallery(galleryItems);

const onClick = (evt) => {
  evt.preventDefault();
  const target = evt.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${target}">
  `);

  instance.show();
};

galleryEL.addEventListener("click", onClick);
