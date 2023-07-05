import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
const gallery = document.querySelector('.gallery');
const galleryAdd = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');
gallery.innerHTML = galleryAdd;
const lightbox = new SimpleLightbox('.gallery a');
console.log(galleryItems);
