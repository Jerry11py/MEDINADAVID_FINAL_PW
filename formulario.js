// Inicializar emailjs
emailjs.init("JruyWWTDeeTgDELeU"); // Reemplaza con tu ID público de EmailJS

// Manejar el envío del formulario
document.getElementById("employeeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const toEmail = document.getElementById("toEmail").value;
    const employeeData = document.getElementById("employeeData").value;
    const salary = document.getElementById("salary").value;
    const observation = document.getElementById("observation").value;
    const senderName = document.getElementById("senderName").value;
    const messageStatus = document.getElementById("messageStatus");

    // Enviar datos a través de EmailJS
    emailjs
        .send("service_o7it8bg", "template_yifwok8", {
            toEmail: toEmail,
            employeeData: employeeData,
            salary: salary,
            observation: observation,
            senderName: senderName
        })
        .then(() => {
            messageStatus.textContent = "Mensaje enviado exitosamente.";
            messageStatus.style.color = "green";
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            messageStatus.textContent = "Error al enviar el mensaje.";
            messageStatus.style.color = "red";
        });
});

// Limpiar formulario
document.getElementById("clearForm").addEventListener("click", function () {
    document.getElementById("employeeForm").reset();
    document.getElementById("messageStatus").textContent = "";
});

function calcularTotalProducto() {
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad:"));
    
    if (isNaN(precio) || isNaN(cantidad)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const total = precio * cantidad;
    alert(`El total por la cantidad de productos es: ${total}`);
}

function calcularPorcentaje() {
    const precio = parseFloat(prompt("Ingrese el precio:"));

    if (isNaN(precio)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const porcentaje = precio * 0.30;  // 30%
    alert(`El 30% del precio es: ${porcentaje}`);
}

function calcularDescuento() {
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad:"));

    if (isNaN(precio) || isNaN(cantidad)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const totalPrecio = precio * cantidad;
    const descuento = totalPrecio * 0.25;  // 25% de descuento
    const totalConDescuento = totalPrecio - descuento;
    alert(`El precio total con un 25% de descuento es: ${totalConDescuento}`);
}

