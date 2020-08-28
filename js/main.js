import Modal from './modal.js';
 const button = document.querySelector('.open-modal');
 const modal = new Modal(document.querySelector('.windows-modal'));

// console.log(modal);
 
 button.onclick = function(){
   modal.open();
 }
 window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
  }
};



/*

const close = document.querySelector(".close-modal");
const open = document.querySelector(".open-modal");
const containerModal = document.querySelector(".windows-modal");

window.onclick = function (e) {
  if (e.target == containerModal) {
    containerModal.style.display = "none";
  }
};

close.addEventListener("click", function () {
  containerModal.style.opacity = "0";
  containerModal.style.visibility = "hidden";
});

open.addEventListener("click", function () {
  containerModal.style.opacity = "1";
  containerModal.style.visibility = "visible";
});*/
