"use strict";

const list = document.getElementById("list");
const text = document.getElementById("text");
let newItem = "";

function darElValor(valor) {
  newItem = valor;
}

function createBtn(listItem) {
  const btn = document.createElement("button");
  btn.innerHTML = "x";
  btn.classList.add("buttonX");
  btn.addEventListener("click", () => {
    listItem.remove();
  });
  listItem.append(btn);
}

function addStyle(element) {
  element.classList.add("crossOut");
}

function removeStyle(element) {
  element.classList.remove("crossOut");
}

let isCrossOut = false

function toggleStyle(param) {
  if (isCrossOut) {
    removeStyle(param)
    isCrossOut = false
  } else {
    addStyle(param)
    isCrossOut = true
  }
}

function insertListItem() {
  if (!newItem) return alert("¡Invalid text!");
  // Create list item and add current value from input
  const li = document.createElement("li");
  const span = document.createElement("span")
  span.innerText= newItem;

  li.innerHTML = `<i class="fa fa-check"></i>` 

  li.append(span);
  // Create and add button to list item
  createBtn(li);
  list.append(li);


  // Reset values
  text.value = "";
  newItem = "";

  li.addEventListener("click", () => toggleStyle(li))
}



 
