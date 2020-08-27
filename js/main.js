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
});
