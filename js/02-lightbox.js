import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));

function createGalleryItems(image) {    

    return image.map(({ preview, original, description }) => {
        return `
        
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />        
            </a>
        
        `
    })
        .join('');   
    
};
    
let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox',  {
        captionsData: 'alt',   
        
        captionDelay: 250,
        scrollZoom: false,
        
    });