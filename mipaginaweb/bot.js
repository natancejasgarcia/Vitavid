document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-btn");
    const chatOutput = document.getElementById("chat-output");
    const buttonContainer = document.querySelector(".button-container");
    inputField.addEventListener("keyup", function(event) {
        // Número 13 es el código de tecla para "Enter"
        if (event.keyCode === 13) {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            sendButton.click(); // Simular un click en el botón de enviar
        }
    });

    sendButton.addEventListener("click", function() {
        let userMessage = inputField.value;

        if (userMessage.trim() === '') return;

        chatOutput.innerHTML += `<div class='user-message'>${userMessage}</div>`;
        inputField.value = '';

        if (userMessage.toLowerCase() === "ayuda") {
            buttonContainer.style.display = "block";
            chatOutput.innerHTML += `<div class='bot-message'>¿En qué puedo ayudarte? Aquí tienes algunas opciones:</div>`;
        } else if (userMessage.toLowerCase() === "hola") {
            chatOutput.innerHTML += `<div class='bot-message'>¡Hola! ¿En qué puedo ayudarte hoy?<br> (Escribe ayuda si quieres concertar una cita)</div>`;
        } else if (userMessage.toLowerCase() === "gracias") {
            chatOutput.innerHTML += `<div class='bot-message'>¡De nada! Estoy aquí para ayudar. Si tienes más preguntas, no dudes en hacerlas.</div>`;
        } else {
            chatOutput.innerHTML += `<div class='bot-message'>Lo siento, no comprendo esa solicitud. Escribe "ayuda" si necesitas opciones.</div>`;
        }

        chatOutput.scrollTop = chatOutput.scrollHeight;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguesa = document.querySelector(".menu-hamburguesa");
    const menuLateral = document.querySelector(".menu-lateral");

    menuHamburguesa.addEventListener("click", function() {
        if (menuLateral.classList.contains("open")) {
            menuLateral.classList.remove("open");
        } else {
            menuLateral.classList.add("open");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const closeIcon = document.querySelector(".close-menu");
    const sideMenu = document.querySelector(".menu-lateral");

    closeIcon.addEventListener("click", function() {
        sideMenu.classList.toggle("open");
    });
});
