import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.formEl.addEventListener("submit",d);s.loader.style.visibility="hidden";function d(i){i.preventDefault(),s.galleryEl.innerHTML="";const t=i.target.elements.valueGallery.value;t!==""&&(s.loader.style.visibility="visible"),m(t).then(o=>{o.length>0&t!==""?(s.loader.style.visibility="hidden",y(o)):(s.loader.style.visibility="hidden",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}))}),i.target.reset()}function m(i){const t="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"42132466-2eec74b8e2a534f613ea758a4",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}?${n}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits)}function f(i){const{webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:l,downloads:a}=i;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${o}">
    <img src="${t}" alt="${n}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${r}</p>
    <p class="describe">Comments ${l}</p>
    <p class="describe">Downloads ${a}</p>
    </div>
    </div>
    </li>
    `}function p(i){return i.map(f).join("")}function y(i){const t=p(i);s.galleryEl.innerHTML=t,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
