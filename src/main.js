'use strict'

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    formEl: document.querySelector('.form'),
    galleryEl: document.querySelector('.gallery'),
}

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.valueGallery.value;
    // getUrl(value)
    getUrl(value).then(data =>{
        renderImages(data);
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
    
    return fetch(url).then(data => data.json());
}

function imageTemplate(img) {
    return `<div class="card">
    <div class="img-container"
    <img
    src="${img.hits.webformatURL}"
    alt="…"
    width="360"
    height="200"
    </div>
    
    `;
}

function renderImages(img) {
    const markup = imageTemplate(img);
    refs.galleryEl.insertAdjacentHTML('beforeend', markup);
};