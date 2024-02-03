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
    getUrl(value).then(data => {
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
    
    return fetch(url).then(data => data.json()).then(data => data.hits); ;
}



function imageTemplate(img) {
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = img;
    console.log(webformatURL);
    return `<li>
    <div class="card">
    <div class="img-container">
    <img
    src=${webformatURL}
    alt= ${ tags }
    width="360"
    height="200"
    />
    </div>
    <div class="img-comments">
    <p>Likes ${ likes }</p>
    <p>Views ${ views }</p>
    <p>Comments ${ comments }</p>
    <p>Downloads ${downloads}</p>
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