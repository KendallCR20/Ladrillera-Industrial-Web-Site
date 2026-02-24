document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.getElementById("processAccordion");

    $(accordion).on("shown.bs.collapse", function (event) {
        const openedElement = event.target; // Contenido del acordeón abierto
        const header = openedElement.previousElementSibling; // Card-header correspondiente

        if (header) {
            // Obtenemos la posición del header del acordeón
            const headerOffset = header.getBoundingClientRect().top + window.scrollY;

            // Ajustamos la posición para desplazamiento
            const offsetAdjustment = 50; // Cambia este número para ajustar más arriba o abajo

            window.scrollTo({
                top: headerOffset - offsetAdjustment, // Ajusta según lo que necesitas
                behavior: "smooth", // Animación suave
            });
        }
    });
});
