'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    formEl: document.querySelector('.form'),
    galleryEl: document.querySelector('.gallery'),
    
}
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
    },
]
 refs.formEl.addEventListener('submit', onFormSubmit);

//     const markup = images.map(({preview, original, description}) => {
//         return `<li class="gallery-item2">
//  <div>
//      <div class="gallery-item">
//           <a class="gallery-link" href="${original}">
//             <img class="gallery-image" src="${preview}" alt="${description}" />
//           </a>
//      </div>
//  </div>
// </li>`}).join('');
//     refs.galleryEl.insertAdjacentHTML('beforeend',markup);



function onFormSubmit(e) {
    e.preventDefault();
     refs.galleryEl.remove;
    const value = e.target.elements.valueGallery.value;
   
    getUrl(value).then(data => {
        if (data.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'center',
})
        }
        renderImages(data);
            gallery.open();
    console.log(gallery);
    });
    
    e.target.reset();
};

function getUrl(clientValue) {
    const BASE_URL = 'https://pixabay.com';
    const ENDPOINT = '/api/';
    const searchParams = new URLSearchParams({
        key: '42132466-2eec74b8e2a534f613ea758a4',
        q: clientValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${BASE_URL}${ENDPOINT}?${searchParams}`;
    
    return fetch(url)
        .then(data => {
            if (!data.ok) {
                throw new Error(data.status);
            }
            return data.json()
        })
        .then(data => data.hits);

}



function imageTemplate(img) {
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = img;
    
    return `<li>
    <div class="card">
    <div class="img-container">
   <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" />
                </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${ likes }</p>
    <p class="describe">Views ${ views }</p>
    <p class="describe">Comments ${ comments }</p>
    <p class="describe">Downloads ${downloads}</p>
    </div>
    </div>
    </li>
    `;
}


function imagesTemplate(images) {
    return images.map(imageTemplate).join('');
}
function renderImages(images) {
    const markup = imagesTemplate(images) ;
    refs.galleryEl.innerHTML = markup;
};
     let gallery = new SimpleLightbox('.img-container a');

gallery.on('show.simplelightbox', function () {});