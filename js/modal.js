const cards = document.querySelector(".cards"); 
function Modal(element) {
  this.element = element;
  this.buttonClose = this.element.querySelector(".close-modal");
  this.buttonAccept = this.element.querySelector(".js_accept");
  this.buttonCancel = this.element.querySelector(".js_cancel"); 
  

  this.buttonClose.onclick = ()=>{
    this.close()
  }
  this.buttonCancel.onclick = ()=>{
    this.close()
  }

  this.buttonAccept.onclick = function(e){
    e.preventDefault();
     
    const name = document.getElementById('name').value;
    const lastname =document.getElementById('lastname').value;
    const race =document.getElementById('race').value;
    const phone =document.getElementById('phone').value;
    const infoAditional =document.getElementById('textarea').value;

    const card = document.createElement('div');

    card.innerHTML = `
    <img src="./img/dog2.jpg" alt="texto entrada" />
            <div class="content">
              <h3> ${name}</h3>
              <p>${lastname}</p>
              <span>|</span>
              <p>${race}</p>
              <p>${phone}</p>
              <p>
                ${infoAditional}
              </p>
            </div>
    `
    console.log(cards);
    cards.appendChild(card);  


   
    console.log(name)

  }
   

  
 

}

Modal.prototype.open = function(){
  this.element.style.opacity = "1";
  this.element.style.visibility = "visible";
}
Modal.prototype.close = function(){
  this.element.style.opacity = "0";
  this.element.style.visibility = "hidden";

}

/*
Modal.prototype.close = function(){
  this.containerModal.style.opacity = "0";
  this.containerModal.style.visibility = "hidden";
}*/

export default Modal;
