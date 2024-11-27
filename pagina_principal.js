// Función para mostrar un popup y pedir el nombre del usuario
function askUserName() {
    let userName = prompt("Por favor, ingresa tu nombre:");
    
    // Si el usuario no ingresa un nombre, asignar "Visitante"
    if (!userName || userName.trim() === "") {
        userName = "Visitante";
    }

    return userName;
}

// Solicitar el nombre del usuario cada vez que se carga la página
const userName = askUserName();

// Mostrar el mensaje de bienvenida personalizado
const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.textContent = `¡Hola, ${userName}! `;
