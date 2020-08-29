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
            <img src="https://placedog.net/640/480?random" alt="texto entrada" />
              <h3 class="name"> ${name.value}</h3>
              <h3 class="lastname"> ${lastname.value}</h3>
              <div>
              <p class="race">${race.value}</p>
              <span>|</span>
              <p class="country">${country.value}</p>
              </div>
              <p class="phone">${phone.value}</p>
              <p class="textarea">
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
    const modal3 = new Modal3(document.querySelector(".windows-modal"), card);

    
    
    const editName = card.querySelector(".name").innerHTML;
    const editLastname = card.querySelector(".lastname").innerHTML;
    const editRace = card.querySelector(".race").innerHTML;
    const editCountry = card.querySelector(".country").innerHTML;
    const editPhone = card.querySelector(".phone").innerHTML;
    const editInfo = card.querySelector(".textarea").innerHTML;

    modal3.asignar(editName, editLastname, editRace, editCountry, editPhone, editInfo);

    console.log(card);

    console.log("data car", editName, editRace, editCountry, editPhone,  editInfo);

    modal3.open();

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
