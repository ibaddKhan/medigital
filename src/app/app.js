function toggleMenu() {
    const menu = document.getElementById("myLinks");
    if (menu.classList.contains("active")) {
      menu.classList.add("unactive");
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
      menu.classList.remove("unactive");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("myLinks");
    menu.classList.remove("active");
    menu.classList.remove("unactive");
  });