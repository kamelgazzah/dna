document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menu-container");

  fetch("menu.html")
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "menu.css";
      document.head.appendChild(css);

      const script = document.createElement("script");
      script.src = "menu.js";
      document.body.appendChild(script);
    });
});
