import{i as m,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery")};a.formEl.addEventListener("submit",f);function f(t){t.preventDefault(),a.galleryEl.remove;const o=t.target.elements.valueGallery.value;d(o).then(n=>{n.length===0&&m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),h(n),l.open(),console.log(l)}),t.target.reset()}function d(t){const o="https://pixabay.com",n="/api/",s=new URLSearchParams({key:"42132466-2eec74b8e2a534f613ea758a4",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${n}?${s}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits)}function g(t){const{webformatURL:o,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:c}=t;return`<li>
    <div class="card">
    <div class="img-container">
   <a href="${n}">
                    <img src="${o}" alt="${s}" />
                </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${r}</p>
    <p class="describe">Comments ${i}</p>
    <p class="describe">Downloads ${c}</p>
    </div>
    </div>
    </li>
    `}function p(t){return t.map(g).join("")}function h(t){const o=p(t);a.galleryEl.innerHTML=o}let l=new u(".img-container a");l.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
