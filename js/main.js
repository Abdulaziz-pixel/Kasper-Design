"use strict";
// Start ShowModel click
const modal = document.querySelector(".modal");
const overlay = document.querySelector(" .modal + .overlay");

const btnShowClick = document.querySelector(".video .text button");

console.log(overlay);

btnShowClick.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
// End ShowModel click

// Start CloseModel click
const CloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const btnCloseModal = document.querySelector(".video .text .modal button");

btnCloseModal.addEventListener("click", CloseModal);

overlay.addEventListener("click", CloseModal);

// End CloseModel click
