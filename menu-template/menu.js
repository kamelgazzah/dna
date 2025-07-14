document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    nav.classList.toggle("active");
    document.body.classList.toggle("lock-scroll");
  });

  const links = document.querySelectorAll("nav li > a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const parent = link.parentElement;
      const submenu = parent.querySelector("ul");

      if (submenu && window.innerWidth <= 768) {
        e.preventDefault();
        parent.classList.toggle("show-sub");
      }
    });
  });
});
