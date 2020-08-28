function Modal(element) {
  this.element = element;
  this.close = this.element.querySelector(".close-modal");
  this.accept = this.element.querySelector(".js_accept");
  this.cancel = this.element.querySelector(".js_cancel"); 
}

Modal.prototype.open = function(){
  this.element.style.opacity = "1";
  this.element.style.visibility = "visible";

}

/*
Modal.prototype.close = function(){
  this.containerModal.style.opacity = "0";
  this.containerModal.style.visibility = "hidden";
}*/

export default Modal;
