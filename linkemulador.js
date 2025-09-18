function abrirModal() {
  document.getElementById("modal").style.display = "flex";

  let version = document.getElementById("versionSelect").value;
  let linkMega = document.getElementById("linkMega");
  let linkMediafire = document.getElementById("linkMediafire");

  switch (version) {
    case "1": // BlueStacks
      linkMega.href = "https://mega.nz/file/bluestacks";
      linkMediafire.href = "https://www.mediafire.com/file/bluestacks";
      break;

    case "2": // LDPlayer
      linkMega.href = "https://mega.nz/file/ldplayer";
      linkMediafire.href = "https://www.mediafire.com/file/ldplayer";
      break;

    case "3": // NoxPlayer
      linkMega.href = "https://mega.nz/file/noxplayer";
      linkMediafire.href = "https://www.mediafire.com/file/noxplayer";
      break;

    case "4": // MemuPlay
      linkMega.href = "https://mega.nz/file/memuplay";
      linkMediafire.href = "https://www.mediafire.com/file/memuplay";
      break;

    case "5": // RetroArch
      linkMega.href = "https://mega.nz/file/retroarch";
      linkMediafire.href = "https://www.mediafire.com/file/retroarch";
      break;

      default:
      linkMega.href = "error, seleccioan bien p webon";
      linkMediafire.href = "error, seleccioan bien p webon";
      linkdrive.href = "error, seleccioan bien p webon";
  }
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
