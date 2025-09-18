// Abrir modal
function abrirModal(id) {
  document.getElementById("modal").style.display = "block";

  // Aquí pones los links dependiendo del programa
  const linkMega = document.getElementById("linkMega");
  const linkMediafire = document.getElementById("linkMediafire");
  const linkDrive = document.getElementById("linkDrive");

  switch(id) {
    case '1': // CINEMA 4D
      linkMega.href = "https://mega.nz/winrar";
      linkMediafire.href = "https://mediafire.com/winrar";
      linkDrive.href = "https://drive.google.com/file/d/1KbpC2YQhjpuZC9eWWzfwjaOCfKIwdIOC/view?usp=sharing";
      break;
    case '2': // NITRO PDF
      linkMega.href = "https://mega.nz/photoshop";
      linkMediafire.href = "https://mediafire.com/photoshop";
      linkDrive.href = "https://drive.google.com/file/d/1QO0YDMJZML3uMLLAP4GyyD1mScLlAQI_/view?usp=sharing";
      break;
    case '3': // PACKTRACER
      linkMega.href = "https://mega.nz/office2019";
      linkMediafire.href = "https://mediafire.com/office2019";
      linkDrive.href = "https://drive.google.com/file/d/1ceBfNrtPjXzeoq-k7HZwiphBLwEsk1lA/view?usp=sharing";
      break;
    case '4': // ARCHITEC ENDERPRISE
      linkMega.href = "https://mega.nz/vscode";
      linkMediafire.href = "https://mediafire.com/vscode";
      linkDrive.href = "https://drive.google.com/file/d/1K713JKo0lA-nAIbqzojj_jYL-6ZbNkjE/view?usp=sharing";
      break;
    case '5': // photoshop cs6
      linkMega.href = "https://mega.nz/javajdk";
      linkMediafire.href = "https://mediafire.com/javajdk";
      linkDrive.href = "https://drive.google.com/file/d/1qwXDNJ-9zZbyJF5Pah7sokVjNlssc1ga/view?usp=sharing";
      break;
    case '6': // SPSS
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/10iK7E3iHhJqjCulgSTKiR4kGbtcvTc1O/view?usp=sharing";
      break;
       case '7': //CINEMA 4D 2012
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/1JB69hQ_kHuEQt2XsVW1al1r3vAkj-qV8/view?usp=sharing";
      break;
        case '8': //CINEMA 4D 2021 PORTABLE
      linkMega.href = "https://mega.nz/python";
      linkMediafire.href = "https://mediafire.com/python";
      linkDrive.href = "https://drive.google.com/file/d/19lsX9xU-8a_h6WH8whx2UOwUVWpedTMu/view?usp=sharing";
      break;
    default:
      linkMega.href = "error, seleccioan bien p webon";
      linkMediafire.href = "error, seleccioan bien p webon";
      linkDrive.href = "error, seleccioan bien p webon";
  }
}

// Cerrar modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
