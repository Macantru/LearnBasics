"use strict";

const list = document.getElementById("list");
const text = document.getElementById("text");
let newItem = "";

// eslint-disable-next-line no-unused-vars
function darElValor(valor) {
  newItem = valor;
}

function createBtn(listItem) {
  console.log(listItem);
  const btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.classList.add("buttonX");
  btn.addEventListener("click", () => {
    listItem.remove();
  });
  listItem.append(btn);
}

function toggleStyle(listItem) {
  const toggle = listItem.classList.toggle("crossOut");
  if (toggle) {
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check");
    listItem.append(checkIcon)
  } else {
    const checkIcon = listItem.getElementsByClassName('fa-check')[0]
    checkIcon.remove()
  }
}

// eslint-disable-next-line no-unused-vars
function insertListItem() {
  if (!newItem) return alert("¡Invalid text!");
  // Create list item and add current value from input
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newItem;

  li.append(span);
  // Create and add button to list item
  createBtn(li);
  list.append(li);

  // Reset values
  text.value = "";
  newItem = "";

  li.addEventListener("click", () => toggleStyle(li));
}
