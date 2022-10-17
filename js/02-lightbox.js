import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryImg = (galleryItems) =>
  galleryItems.map((imgItem) => {
    const galleryItemsEl = `<a class="gallery__item" href="${imgItem.original}">
  <img class="gallery__image" src="${imgItem.preview}" alt="${imgItem.description}" />
</a>`;
    galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);
  });
galleryImg(galleryItems);

galleryEl.addEventListener("click", onGallery);

function onGallery(event) {
  event.preventDefault();
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
