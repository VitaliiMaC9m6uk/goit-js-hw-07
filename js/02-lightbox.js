import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));
gallery.addEventListener('click', clickInGallery)

function createGalleryItems(image) {    

    return image.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />        
            </a>
        </div>`
    })
        .join('');   
    
};
function clickInGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    console.log(event.target);

    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
	// do something…
});
}      