const ListUsuarios = document.getElementById("lista-usuarios")
const boton = document.getElementById("boton")

function reqListener() {
  const usuarios = JSON.parse(this.responseText);
  console.log(usuarios);
  const usuariosRender = usuarios.map ( usuario => `<li>${usuario.nombre}</li>`).join('')
console.log(usuariosRender);
ListUsuarios.innerHTML = usuariosRender
}


var peticion = new XMLHttpRequest();
peticion.addEventListener("load", reqListener);


function enviarDatos(){
  peticion.open(
    "post",
    "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios"
  );
  peticion.setRequestHeader(
    "content-type",
    "application/x-www-form-urlencoded",
    true
  );
  peticion.send(
    "nombre=miercoles10"
  );
  setTimeout(refrescar,  3000)
}

function refrescar() {
  peticion.open("GET","https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
peticion.send();
}


boton.onclick = enviarDatos;