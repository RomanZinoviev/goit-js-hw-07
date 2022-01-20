import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryMarup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>`
}).join("");

const galleryHandler = (event) => {
    if (!event.target.dataset === sourse) return;
    event.stopPropagation();
    const originalUrl = event.target.dataset.source;
    console.log(originalUrl)
};

galleryEl.insertAdjacentHTML("afterbegin", galleryMarup);
galleryEl.addEventListener("click", galleryHandler);

