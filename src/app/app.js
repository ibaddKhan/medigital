function toggleMenu() {
  const menu = document.getElementById("myLinks");
  const icon = document.querySelector(".icon i"); // Select the font-awesome icon

  if (menu.classList.contains("active")) {
    menu.classList.add("unactive");
    menu.classList.remove("active");

    // Change icon to hamburger
    icon.classList.remove("fa-times", "fa-regular");
    icon.classList.add("fa-bars");
  } else {
    menu.classList.add("active");
    menu.classList.remove("unactive");

    // Change icon to "X"
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times", "fa-regular");
  }
}

// Ensure proper initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("myLinks");
  const icon = document.querySelector(".icon i");

  menu.classList.remove("active");
  menu.classList.remove("unactive");

  // Ensure the icon is in the hamburger state
  icon.classList.remove("fa-times", "fa-regular");
  icon.classList.add("fa-bars");
});
const cards = document.querySelectorAll('.service-card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    // Remove 'expanded' class from all cards
    cards.forEach((c) => c.classList.remove('expanded'));
    // Add 'expanded' class to the hovered card
    card.classList.add('expanded');
  });
});
