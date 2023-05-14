// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryWithItems = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryWithItems);

const list = document.querySelector(".gallery");
list.style.listStyle = "none";

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
