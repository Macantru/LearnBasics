"use strict";

const list = document.getElementById("list");
const text = document.getElementById("text");
let newItem = "";

// eslint-disable-next-line no-unused-vars
function darElValor(valor) {
  newItem = valor;
}


function createBtn(listItem) {
  console.log(listItem)
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
  element.innerHTML =  `<i class="fa fa-check"></i>` + element.innerHTML 
}

function removeStyle(element) {
  element.classList.remove("crossOut");
  const icons = element.getElementsByClassName('fa-check')
  icons[0].remove()
  
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


// eslint-disable-next-line no-unused-vars
function insertListItem() {
  if (!newItem) return alert("¡Invalid text!");
  // Create list item and add current value from input
  const li = document.createElement("li");
  const span = document.createElement("span")
  span.innerText= newItem;

  li.append(span);
  // Create and add button to list item
  createBtn(li);
  list.append(li);
 
  // Reset values
  text.value = "";
  newItem = "";

  li.addEventListener("click", () => toggleStyle(li))

}



