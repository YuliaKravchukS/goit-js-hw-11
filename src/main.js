'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    formEl: document.querySelector('.form'),
    galleryEl: document.querySelector('.gallery'),
    loader: document.querySelector('.loader')
}


refs.formEl.addEventListener('submit', onFormSubmit);
refs.loader.style.visibility = 'hidden';

function onFormSubmit(e) {
    e.preventDefault();
    refs.galleryEl.innerHTML = '';
    const value = e.target.elements.valueGallery.value;
    if (value !== '') {
        refs.loader.style.visibility = 'visible';
    }        
    getUrl(value).then(data => {
        if (data.length > 0 & value !== '') {
            refs.loader.style.visibility = 'hidden';
            renderImages(data);
        } else {
            refs.loader.style.visibility = 'hidden';
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topCenter',
            })
        }
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
            return data.json();
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
    let simpleLightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }).refresh();
};

