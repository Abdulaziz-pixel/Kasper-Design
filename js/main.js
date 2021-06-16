'use strict';
// Start ShowModel click
const modal = document.querySelector('.modal');
const overlay = document.querySelector(' .modal + .overlay');

const btnShowClick = document.querySelector('.video .text button');

console.log(overlay);

btnShowClick.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
// End ShowModel click

// Start CloseModel click
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const btnCloseModal = document.querySelector('.video .text .modal button');

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// End CloseModel click

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
