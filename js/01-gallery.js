import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryList.addEventListener("click", handleClick);

function createMarkup(array) {
    return array.map(({preview, original, description}) => 
    `<li class="gallery__item"">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </li>`
    ).join("")
}
// console.log(createMarkup(galleryItems));

function handleClick(event) { 
    event.preventDefault();
    if ( event.target === event.currentTarget) {
        return;
    }
    // console.log("currentTarget", event.currentTarget);
    // console.log("target", event.target);
  
    const currentImage = event.target;
    const img =  currentImage.dataset.source;



    const instance = basicLightbox.create(`
    <div class="modal">
    <img class="gallery__image" src="${img}">
    </div>
`)
instance.show()
}







