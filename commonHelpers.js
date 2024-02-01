(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery")};l.formEl.addEventListener("submit",a);function a(r){r.preventDefault();const o=r.target.elements.valueGallery.value;c(o).then(n=>{f(n)}),r.target.reset()}function c(r){const o="https://pixabay.com",n="/api/",i=new URLSearchParams({key:"42132466-2eec74b8e2a534f613ea758a4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${n}?${i}`;return fetch(e).then(t=>t.json())}function u(r){return`<div class="card">
    <div class="img-container"
    <img
    src="${r.hits.webformatURL}"
    alt="…"
    width="360"
    height="200"
    </div>
    
    `}function f(r){const o=u(r);l.galleryEl.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
