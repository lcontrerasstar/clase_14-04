
document.getElementById("buttonBack").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html";
});


document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nombre = document.querySelector("input[type = 'text']").value,
        correo = document.querySelector("input[type = 'email']").value,
        edad = document.querySelector("input[type = 'number']").value,
        valido = true,
        mensaje = "";

    if (!nombre) {
        valido = false;
        mensaje = "Falta ingresar nombre";
        document.getElementById("errorForm").innerText = mensaje;
        return;
    }
    if (!edad) {
        valido = false;
        mensaje = "Debes ingresar la edad";
        document.getElementById("errorForm").innerText = mensaje;
        return;
    }
    if (parseInt(edad) < 18) {
        valido = false;
        mensaje = "Debes ser mayor de 18 años";
        document.getElementById("errorForm").innerText = mensaje;
        return;
    }
    if (!correo) {
        valido = false;
        mensaje = "Debes ingresar un correo electrónico";
        document.getElementById("errorForm").innerText = mensaje;
        return;
    }
    if (!emailRegex.test(correo)) {
        valido = false;
        mensaje = "Debes ingresar un correo electrónico válido";
        document.getElementById("errorForm").innerText = mensaje;
        return;
    }

    if (valido) {
        window.location.href = "valido.html";
    }
});

document.getElementById("formulario").addEventListener("input", function (e) {
    e.preventDefault();
    document.getElementById("errorForm").innerText = "";
});