import Modal from "./modal.js";
const buttonOpen = document.querySelector(".open-modal");
const buttonClose = document.querySelector(".js_cancel");
const modal = new Modal(document.querySelector(".windows-modal"));

// console.log(modal);

buttonOpen.onclick = function () {
  modal.open();
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
  }
};
