import Modal2 from './modal2.js';
import Modal3 from './modal3.js';

const cards = document.querySelector(".cards");

function Card(modal) {
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const race = document.getElementById("race");
  const phone = document.getElementById("phone");
  const infoAditional = document.getElementById("textarea");
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="edit-delete">
    <button class="edit"> <img src="./img/edit.png" alt=""></button>
    <button class="deleteOpen"> <img src="./img/delete.png" alt=""></button>
  </div>
            <div class="content">
            <img src="./img/dog2.jpg" alt="texto entrada" />
              <h3> ${name.value}</h3>
              <p>${lastname.value}</p>
              <span>|</span>
              <p>${race.value}</p>
              <p>${phone.value}</p>
              <p>
                ${infoAditional.value}
              </p>
            </div>
    `;
  
    cards.appendChild(card);
    name.value = "";
    lastname.value = "";
    race.value ="";
    infoAditional.value = "";

  //const position = [];


  //position.push(cards.appendChild(card), i)

  const editButton = card.querySelector(".edit");
  
  editButton.onclick= ()=>{
    const modal3 = new Modal3(document.querySelector(".windows-modal"));
    modal3.open(this.card);
    console.log(this.card);
  }

  const deleteButton = card.querySelector(".deleteOpen");
  
  deleteButton.onclick= ()=>{
    console.log('elimina');
    const modalDelete = new Modal2(document.querySelector('.modal-delete'), card);

    modalDelete.open();


  }
}




export default Card;
