import Card from "./card.js";
import Modal2 from "./modal2.js";

function Modal3(element, card) {
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



    const  newName = this.element.querySelector("#name").value;
    const  newlastname = this.element.querySelector("#lastname").value;
    const  newrace = this.element.querySelector("#race").value;
    const  newphone = this.element.querySelector("#phone").value;
    const  newCountry = this.element.querySelector("#country").value;
    const  newtextarea = this.element.querySelector("#textarea").value;

    card.querySelector(".name").innerHTML = newName;
    card.querySelector(".lastname").innerHTML = newlastname;
    card.querySelector(".race").innerHTML = newrace;
    card.querySelector(".phone").innerHTML = newphone;
    card.querySelector(".country").innerHTML = newCountry;
    card.querySelector(".textarea").innerHTML = newtextarea;


    

    console.log(newName);

    this.close();
  };
}

Modal3.prototype.open = function () {
  this.element.style.opacity = "1";
  this.element.style.visibility = "visible";
};
Modal3.prototype.close = function () {
  this.element.style.opacity = "0";
  this.element.style.visibility = "hidden";
};

Modal3.prototype.asignar = function(editName,editLastname,editRace,editPhone,editCountry,editInfo){
  
    console.log( 'entraaa');

     this.element.querySelector("#name").value = editName;
     this.element.querySelector("#lastname").value = editLastname;
     this.element.querySelector("#race").value = editRace;
     this.element.querySelector("#phone").value = editPhone;
     this.element.querySelector("#country").value = editCountry;
     this.element.querySelector("#textarea").value = editInfo;
    
}

/*
Modal.prototype.close = function(){
  this.containerModal.style.opacity = "0";
  this.containerModal.style.visibility = "hidden";
}*/

export default Modal3;
