const menu = () => {
    fetch('/menu/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
        })
        .catch(error => console.error("Erreur chargement du menu :", error));

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Erreur chargement du header :", error));
}