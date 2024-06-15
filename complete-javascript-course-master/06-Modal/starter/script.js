'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //Here we have used "querySelectorAll" instead of "querySelector" because the class "show-modal" is class for multiple btns of same type
//console.log(btnsOpenModal);
// What happens on clicking the show-modal
const openModal = function () {
  modal.classList.remove('hidden'); //ClassList let us to add, remove etc. the elements/class of the page
  overlay.classList.remove('hidden');
};
//What happens on clicking the close btn of the modal or on overlay
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  //btnsOpenModal is stored as an array on which we can operate as this
  btnsOpenModal[i].addEventListener('click', openModal); // Notice that we have not used "openModal()" i.e calling the function because that will lead to calling the function as soon as this line gets executed by the JS. However, we want to get it executed only after it is clicked. Therefore, its openModal.
}
btnCloseModal.addEventListener('click', closeModal); // By closeModal() we mean we are calling the function. However, by closeModal we are declaring/defining and saying JS that execute the function only after it is clicked.
overlay.addEventListener('click', closeModal);

// Applying the Key-press event
//Key-press or keyboard events are global in nature which means it acts on everything and not on particular element
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
