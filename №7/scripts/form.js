const form = document.querySelector(".wishlist-form");
const input = document.querySelector(".wishlist-form__input");
const container = document.querySelector(".wishlist-container");

document.addEventListener("DOMContentLoaded", loadCars);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const carName = input.value;

  if (carName != "") {
    addCar(carName);
    saveCars();
    input.value = "";
  }
});

function addCar(carName) {
  const carElement = document.createElement("div");
  carElement.classList.add("wishlist-form__car");
  carElement.textContent = carName;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.classList.add("wishlist-form__button--delete");

  deleteButton.addEventListener("click", function () {
    container.removeChild(carElement);
    saveCars();
  });

  carElement.appendChild(deleteButton);
  container.appendChild(carElement);
}

function saveCars() {
  const wishlistCars = Array.from(container.children).map(
    (car) => car.firstChild.textContent
  );
  localStorage.setItem("wishlist-cars", JSON.stringify(wishlistCars));
}

function loadCars() {
  const wishlistCars = JSON.parse(localStorage.getItem("wishlist-cars"));
  wishlistCars.forEach((car) => addCar(car));
}
