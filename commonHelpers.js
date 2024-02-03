(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery")};l.formEl.addEventListener("submit",c);function c(r){r.preventDefault();const o=r.target.elements.valueGallery.value;u(o).then(n=>{d(n)}),r.target.reset()}function u(r){const o="https://pixabay.com",n="/api/",s=new URLSearchParams({key:"42132466-2eec74b8e2a534f613ea758a4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${n}?${s}`;return fetch(e).then(t=>t.json()).then(t=>t.hits)}function m(r){const{webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:a}=r;return console.log(o),`<li>
    <div class="card">
    <div class="img-container">
    <img
    src=${o}
    alt= ${s}
    width="360"
    height="200"
    />
    </div>
    <div class="img-comments">
    <p>Likes ${e}</p>
    <p>Views ${t}</p>
    <p>Comments ${i}</p>
    <p>Downloads ${a}</p>
    </div>
    </div>
    </li>
    `}function f(r){return r.map(m).join("")}function d(r){const o=f(r);l.galleryEl.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
