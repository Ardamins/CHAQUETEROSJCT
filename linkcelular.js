function abrirModal() {
  const version = document.getElementById("versionSelect").value;
  const linkMega = document.getElementById("linkMega");
  const linkMediafire = document.getElementById("linkMediafire");

  switch (version) {
    case "1": // Android 11
      linkMega.href = "https://mega.nz/file/android-11";
      linkMediafire.href = "https://www.mediafire.com/file/android-11";
      break;

    case "2": // Android 12
      linkMega.href = "https://mega.nz/file/android-12";
      linkMediafire.href = "https://www.mediafire.com/file/android-12";
      break;

    case "3": // Android 13
      linkMega.href = "https://mega.nz/file/android-13";
      linkMediafire.href = "https://www.mediafire.com/file/android-13";
      break;

    case "4": // Android 14
      linkMega.href = "https://mega.nz/file/android-14";
      linkMediafire.href = "https://www.mediafire.com/file/android-14";
      break;

     default:
      linkMega.href = "error, seleccioan bien p webon";
      linkMediafire.href = "error, seleccioan bien p webon";
      linkDrive.href = "error, seleccioan bien p webon";
  }

  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
