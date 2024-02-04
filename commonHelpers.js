import{S as c,i as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.formEl.addEventListener("submit",m);function m(t){t.preventDefault(),l.galleryEl.innerHTML="";const o=t.target.elements.valueGallery.value;l.loader.style.visibility="visible",d(o).then(s=>{s.length>0&o!==""?(l.loader.style.visibility="hidden",g(s),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()):u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}),t.target.reset()}function d(t){const o="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"42132466-2eec74b8e2a534f613ea758a4",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${s}?${i}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits)}function f(t){const{webformatURL:o,largeImageURL:s,tags:i,likes:e,views:r,comments:n,downloads:a}=t;return`<li>
    <div class="card">
    <div class="img-container">
   <a href="${s}">
                    <img src="${o}" alt="${i}" />
                </a>
   </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${r}</p>
    <p class="describe">Comments ${n}</p>
    <p class="describe">Downloads ${a}</p>
    </div>
    </div>
    </li>
    `}function p(t){return t.map(f).join("")}function g(t){const o=p(t);l.galleryEl.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
