'use strict'

const list = document.getElementById("list");
const texto = document.getElementById("texto");
let newItem = "";

function darElValor(valor) {
  newItem = valor;
}



function insertarTexto() {
  if (!newItem) return alert ("¡Invalid text!")
  const li = document.createElement("li");
  li.innerText = newItem;
  const button = document.createElement("button")
  button.innerHTML= "x";
  button.classList.add("botonX")
  button.addEventListener('click', () => {li.remove()} )
  li.append(button)
  list.append(li);
  texto.value = "";
  newItem = "";
}


