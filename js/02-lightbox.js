import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divEl = document.querySelector(".gallery");
const galleryInHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__link" href="${original}"><img class="gallery__image" src=${preview} alt ='${description}'></a></li>`;
  })
  .join("");
divEl.insertAdjacentHTML("beforeend", galleryInHTML);

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
