import { galleryItems } from './gallery-items.js';


console.log(galleryItems);
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', createGalleryItems(galleryItems));
gallery.addEventListener('click', clickOnGallery)

function createGalleryItems(image) {    

    return image.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    })
        .join('');   
    
}

function clickOnGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const closeModal = event => {
        if (event.code === 'Escape') {
            instance.close();
        }
    };

    const instance = basicLightbox.create(`
	 	<img width="1280" src="${event.target.dataset.source}"> `,
        {
            onShow: instance => {
                window.addEventListener('keydown', closeModal)
            },
            onClose: instance => {
                window.removeEventListener('keydown', closeModal)
            },
        }
        
       
    );
    instance.show();
}
    

