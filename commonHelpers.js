import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.formEl.addEventListener("submit",d);s.loader.style.visibility="hidden";function d(i){i.preventDefault(),s.galleryEl.innerHTML="";const r=i.target.elements.valueGallery.value;r!==""&&(s.loader.style.visibility="visible"),m(r).then(o=>{o.length>0&r!==""?(s.loader.style.visibility="hidden",y(o)):(s.loader.style.visibility="hidden",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}),i.target.reset()}function m(i){const r="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"42132466-2eec74b8e2a534f613ea758a4",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${n}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits)}function f(i){const{webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:l,downloads:a}=i;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${o}">
    <img src="${r}" alt="${n}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${t}</p>
    <p class="describe">Comments ${l}</p>
    <p class="describe">Downloads ${a}</p>
    </div>
    </div>
    </li>
    `}function p(i){return i.map(f).join("")}function y(i){const r=p(i);s.galleryEl.innerHTML=r,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
