import Card from "./card.js";

function Modal(element) {
  this.element = element;
  this.buttonClose = this.element.querySelector(".close-modal");
  this.buttonAccept = this.element.querySelector(".js_accept");
  this.buttonCancel = this.element.querySelector(".js_cancel");

  this.buttonClose.onclick = () => {
    this.close();
  };
  this.buttonCancel.onclick = () => {
    this.close();
  };

  this.buttonAccept.onclick = (e) => {
    e.preventDefault();

    const card = new Card(this);

    card.name = "";
    card.lastname = "";
    card.race ="";
    card.infoAditional = "";


    this.close();
  };
}

Modal.prototype.open = function () {
  this.element.style.opacity = "1";
  this.element.style.visibility = "visible";
};
Modal.prototype.close = function () {
  this.element.style.opacity = "0";
  this.element.style.visibility = "hidden";
};


export default Modal;
