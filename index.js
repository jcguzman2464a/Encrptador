function encriptar() {
  let texto = document.getElementById("text").value;
  
  let vacio = null
  
  let encriptaTexto = texto
    
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");

    
  if (texto.lenght != 0 ) {
    document.getElementById("mensaje").value = encriptaTexto;
    mensaje.style.height ="60%"; 
    document.getElementById("mensajeTexto").textContent = vacio;
    document.getElementById("parrafo").textContent = "";
    muneco.style.display = "none";
   
   
  }

  else {
    muneco.style.display = "block";
    document.getElementById("mensajeTexto").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("parrafo").textContent = "Ingresa el texto de deseas encriptar o desencriptar";
    mensaje.style.height = "100px";
    alert("No has ingresado ningun texto");
  }

}