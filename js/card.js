import Modal2 from "./modal2.js";
import Modal3 from "./modal3.js";

const cards = document.querySelector(".cards");

function Card(modal) {
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const race = document.getElementById("race");
  const phone = document.getElementById("phone");
  const country = document.getElementById("country");
  const infoAditional = document.getElementById("textarea");
  const card = document.createElement("div");
  this.card = card;
  this.card.classList.add("card");
  this.card.innerHTML = `
    <div class="edit-delete">
    <button class="edit"> <img src="./img/edit.png" alt=""></button>
    <button class="deleteOpen"> <img src="./img/delete.png" alt=""></button>
  </div>
            <div class="content">
            <img src="./img/dog2.jpg" alt="texto entrada" />
              <h3 class="name"> ${name.value} ${lastname.value}</h3>
              <div>
              <p>${race.value}</p>
              <span>|</span>
              <p>${country.value}</p>
              </div>
              <p>${phone.value}</p>
              <p>
                ${infoAditional.value}
              </p>
            </div>
    `;
  cards.appendChild(this.card);
  name.value = "";
  lastname.value = "";
  race.value = "";
  infoAditional.value = "";

  const editButton = card.querySelector(".edit");

  editButton.onclick = () => {
    const modal3 = new Modal3(document.querySelector(".windows-modal"));
    modal3.open();

    const nane = document.querySelector(".name");

    console.log(this.card);

    console.log("data car", this.card.nane);
  };

  const deleteButton = card.querySelector(".deleteOpen");

  deleteButton.onclick = () => {
    console.log("elimina");
    const modalDelete = new Modal2(
      document.querySelector(".modal-delete"),
      card
    );

    modalDelete.open();
  };
}

export default Card;
