document.addEventListener("DOMContentLoaded", function () {
    // Inicia el cambio de frases después de que la página ha sido cargada completamente
    setInterval(cambiarFrase, 3000);

    function cambiarFrase() {
       
        var frase1 = document.getElementById("frase1");
        var frase2 = document.getElementById("frase2");
        var frase3 = document.getElementById("frase3");

        // Verifica cuál frase está visible y cambia a la siguiente
        if (frase1.style.display !== "none") {
            frase1.style.display = "none";
            frase2.style.display = "block";
        } else if (frase2.style.display !== "none") {
            frase2.style.display = "none";
            frase3.style.display = "block";
        } else {
            frase3.style.display = "none";
            frase1.style.display = "block";
        }
    }
});

document.getElementById("year").innerHTML = new Date().getFullYear();
    