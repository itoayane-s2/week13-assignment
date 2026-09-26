import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>
  <p id="count">0</p>
  <div class="flex gap-4 justify-center">
    <button id="increaseBtn" class="bg-red-500 text-white px-4 py-2 rounded w-60">増やす</button>
    <button id="decreaseBtn" class="bg-blue-500 text-white px-4 py-2 rounded w-60">減らす</button>
    <button id="resetBtn" class="bg-gray-500 text-white px-4 py-2 rounded w-60">リセット</button>
  </div>
`;

const countEl = document.querySelector('#count');
const btn = document.querySelector('#increaseBtn');
let count = 0;

const increaseBtn = document.querySelector('#increaseBtn');
const decreaseBtn = document.querySelector('#decreaseBtn');
const resetBtn = document.querySelector('#resetBtn');

increaseBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});