//Haz tú validación en javascript acá

const nombre = document.getElementById("name")
const correo = document.getElementById("mail")
const asunto = document.getElementById("asunt")
const mensaje = document.getElementById("mensagem")
const formulario = document.getElementById("contacto")
const aviso = document.getElementById("warnings")



const expresiones = {

	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

formulario.addEventListener("submit", e => {
  e.preventDefault()
  let warnings = "";
  let entrar = false;
  let correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if(nombre.nodeValue.length < 5){
    warnings += `el nombre no es valido`;
    entrar = true;
  }
  if(!correo.test(correo.value)){
    warnings += `El email no es valido`
  }
});