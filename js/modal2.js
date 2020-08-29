function Modal2(element, card) {
  this.element = element;
  this.buttonAccept = this.element.querySelector(".js_accept");
  this.buttonCancel = this.element.querySelector(".js_cancel");

  this.buttonCancel.onclick = () => {
    this.close();
  };

  this.buttonAccept.onclick = (e) => {
    e.preventDefault();

    card.remove();
    this.close();
  };
}

Modal2.prototype.open = function () {
  this.element.style.opacity = "1";
  this.element.style.visibility = "visible";
};
Modal2.prototype.close = function () {
  this.element.style.opacity = "0";
  this.element.style.visibility = "hidden";
};

export default Modal2;
