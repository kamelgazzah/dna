const menu = () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            initHamburger();
            localizeHeader();
        })
        .catch(error => console.error("Erreur chargement du header :", error));
}

const SITE_TITLES = {
    ar: "كمال القزاح"
};

function localizeHeader() {
    const lang = document.documentElement.lang;
    const title = SITE_TITLES[lang];
    if (title) {
        const el = document.querySelector(".site-title");
        if (el) el.textContent = title;
    }
}

function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburger.classList.toggle("active");
        mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
    });

    mobileMenu.addEventListener("mouseleave", () => {
        mobileMenu.style.display = "none";
        hamburger.classList.remove("active");
    });

    document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.style.display = "none";
            hamburger.classList.remove("active");
        }
    });
}
