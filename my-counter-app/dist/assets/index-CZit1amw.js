(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <h1>カウンター</h1>
  <p id="count">0</p>
  <div class="flex gap-4 justify-center">
    <button id="increaseBtn" class="bg-red-500 text-white px-4 py-2 rounded w-60">増やす</button>
    <button id="decreaseBtn" class="bg-blue-500 text-white px-4 py-2 rounded w-60">減らす</button>
    <button id="resetBtn" class="bg-gray-500 text-white px-4 py-2 rounded w-60">リセット</button>
  </div>
`;var e=document.querySelector(`#count`);document.querySelector(`#increaseBtn`);var t=0,n=document.querySelector(`#increaseBtn`),r=document.querySelector(`#decreaseBtn`),i=document.querySelector(`#resetBtn`);n.addEventListener(`click`,()=>{t+=1,e.textContent=t}),r.addEventListener(`click`,()=>{--t,e.textContent=t}),i.addEventListener(`click`,()=>{t=0,e.textContent=t});