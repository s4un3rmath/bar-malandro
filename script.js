// =====================================================
// MENU MOBILE
// =====================================================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-active");

});


// =====================================================
// FECHAR MENU AO CLICAR
// =====================================================

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-active");

    });

});


// =====================================================
// FORMULÁRIO DE RESERVA
// =====================================================

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
