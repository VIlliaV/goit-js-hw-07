import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divEl = document.querySelector(".gallery");
const galleryInHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}"><img class="gallery__image" width=340 src=${preview} data-source="${original}"alt ='${description}'></a>`;
  })
  .join("");
divEl.insertAdjacentHTML("beforeend", galleryInHTML);

divEl.addEventListener("click", openModal);

function openModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(`
  <img src='${event.target.dataset.source}' width="800" height="600">
    
`);

  instance.show();
  divEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

const gallery = console.log(galleryItems);
