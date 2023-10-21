import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
let lightbox;
const gallery = document.querySelector('.gallery');
const galleryTemplate = galleryItems.map(({ preview, original, description }) => {
  return `<li class='gallery__item'>
   <a class='gallery__link' href='${original}'>
      <img class='gallery__image' src='${preview}' alt='${description}' />
   </a>
</li>`;
}).join('');
gallery.insertAdjacentHTML('beforeend', galleryTemplate);
lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    close: true,
    closeText: '×',
    nav: true,
    navText: ['←', '→'],
    download: 'Click to download button',
  });
