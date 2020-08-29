import Modal2 from './modal2.js';

const cards = document.querySelector(".cards");

function Card(modal) {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const race = document.getElementById("race").value;
  const phone = document.getElementById("phone").value;
  const infoAditional = document.getElementById("textarea").value;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="edit-delete">
    <button class="edit"> <img src="./img/edit.png" alt=""></button>
    <button class="deleteOpen"> <img src="./img/delete.png" alt=""></button>
  </div>
            <div class="content">
            <img src="./img/dog2.jpg" alt="texto entrada" />
              <h3> ${name}</h3>
              <p>${lastname}</p>
              <span>|</span>
              <p>${race}</p>
              <p>${phone}</p>
              <p>
                ${infoAditional}
              </p>
            </div>
    `;
  cards.appendChild(card);

  const editButton = card.querySelector(".edit");

  editButton.onclick = () => {
    console.log("ppp");
    modal.open();
  }

  const deleteButton = card.querySelector(".deleteOpen");
  
  deleteButton.onclick= ()=>{
    console.log('elimina');
    const modalDelete = new Modal2(document.querySelector('.modal-delete'), card);

    modalDelete.open();

  }
}

export default Card;
