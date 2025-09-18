function abrirModal() {
  const version = document.getElementById("versionSelect").value;
  const linkMega = document.getElementById("linkMega");
  const linkMediafire = document.getElementById("linkMediafire");
  const linkdrive= document.getElementById("linkdrive");
// Carrusel automático duplicando items para scroll infinito
const carruselInner = document.querySelector(".carrusel-inner");
if (carruselInner) {
  carruselInner.innerHTML += carruselInner.innerHTML; // duplicar contenido
}

  // cada versión con su propio link
  switch (version) {
    case "1": // OptiCraft 1.16
      linkMega.href = "https://mega.nz/file/opt-116";
      linkMediafire.href = "https://www.mediafire.com/file/opt-116";
       linkdrive.href = "https://drive.google.com/file/d/16QxR7Kg0mYEDfvE-5U8Uplf4UG4Yz0-j/view?usp=sharing";
      break;

    case "2": // OptiCraft 1.17
      linkMega.href = "https://optijuegos.net/";
      linkMediafire.href = "https://www.mediafire.com/file/opt-117";
      linkdrive.href = "https://drive.google.com/file/d/1TlHnKrkEJWXmaM0b3iRli-QoeCoDxqE3/view?usp=sharing";
      break;

    case "3": // OptiCraft 1.18 portable
      linkMega.href = "https://mega.nz/file/opt-118";
      linkMediafire.href = "https://www.mediafire.com/file/opt-118";
      linkdrive.href = "https://drive.google.com/file/d/1nIgfX3AMQpYzb3JGWAldO7N1KAH3nVQp/view?usp=sharing";
      break;

    case "4": // OptiCraft 1.19
      linkMega.href = "https://mega.nz/file/opt-119";
      linkMediafire.href = "https://www.mediafire.com/file/opt-119";
      linkdrive.href = "https://drive.google.com/file/d/1DtNIAB-Ki0vhxe7MFhn0S0Xd_AAKGrkH/view?usp=sharing";
      break;

    case "5": // OptiCraft 1.20
      linkMega.href = "https://mega.nz/file/opt-120";
      linkMediafire.href = "https://www.mediafire.com/file/opt-120";
      linkdrive.href = "https://drive.google.com/file/d/16-9D2wkF0iVTjgIV90eUkqmfg2B1zNgq/view?usp=sharing";
      break;
  case "6": // OptiCraft 1.21
      linkMega.href = "https://mega.nz/file/opt-116";
      linkMediafire.href = "https://www.mediafire.com/file/opt-116";
      linkdrive.href = "https://drive.google.com/file/d/1_wN7CmXtKtHxdx21k9ofVNysvciwpAEY/view?usp=sharing";
      break;
      
    default:
      linkMega.href = "error, seleccioan bien p webon";
      linkMediafire.href = "error, seleccioan bien p webonr";
      linkdrive.href = "error, seleccioan bien p webon";
  }

  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
