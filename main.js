document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll("#mobileNav a");

  // ABRIR / FECHAR MENU
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // FECHAR AO CLICAR EM QUALQUER LINK
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });

});
