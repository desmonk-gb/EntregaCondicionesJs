document.getElementById("ingresar").addEventListener("click", function() {

    

    let digito1 = document.getElementById("digito1").value;
    let digito2 = document.getElementById("digito2").value;
    let digito3 = document.getElementById("digito3").value;
    let password = digito1 + digito2 + digito3;

    if (password =="911") {
        document.getElementById("mensaje").textContent = "Contraseña 1 correcto";
    } else if (password === "714") {
        document.getElementById("mensaje").textContent = "Contraseña 2 correcto";
    } else {
        document.getElementById("mensaje").textContent = "Contraseña incorrecto, vuelva a intentar";
    }
});