
const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-active");

});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-active");

    });

});



const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    alert(
        `Valeu, ${name}! 🍻\n\n` +
        `Recebemos sua solicitação de reserva.\n` +
        `Em breve entraremos em contato para confirmar.`
    );

    form.reset();

})
