function encriptar() {
  let texto = document.getElementById("text").value;
  let muneco = document.getElementById("muneco");
  let patron = /A-Z/g;
  

    let encriptaTexto = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");


    if (document.getElementById("text").value != "") {
      muneco.style.display = "none";
      document.getElementById("mensajeTexto").textContent = "";
      document.getElementById("parrafo").textContent = "";
      document.getElementById("mensaje").value = encriptaTexto;
      mensaje.style.cssText = 'height 60%; display: block';
      btnCopiar.style.display = "block";
      document.getElementById("text").value = "";

    }
    else {
      muneco.style.display = "block";
      document.getElementById("mensajeTexto").textContent = "Ningún mensaje fue encontrado";
      document.getElementById("parrafo").textContent = "Ingresa el texto de deseas encriptar o desencriptar";
      mensaje.style.cssText = 'height 60%; display: none';
      btnCopiar.style.display = "none";

      alert("No has ingresado ningun texto");
    }
 

 
}

function desencriptar() {
  let texto = document.getElementById("text").value;

  let encriptaTexto = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");


  if (document.getElementById("text").value.lenght != 0) {
    muneco.style.display = "none";
    document.getElementById("mensajeTexto").textContent = "";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("mensaje").value = encriptaTexto;
    mensaje.style.cssText = 'height 60%; display: block';
    document.getElementById("text").value = "";
  }


}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value).then(() => {
      alert("Copiado Exitosamente");
    })
    .catch(() => {
      alert("Error al copiar");
    });
    document.getElementById("mensaje").value="";;
  }
