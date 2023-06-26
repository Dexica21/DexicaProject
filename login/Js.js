
function Entrar(){
    var Usuario = document.getElementById('input1').value;
    var Contraseña = document.getElementById('input2').value;


    if (Usuario === "" && Contraseña === "") {
        alert("Ingrese datos en los campos");
    }
    else if(Usuario === "Dexica" && Contraseña === "123"){
        window.location.href = "../Menu/index.html";
    } 
    else {

        alert("Usuario o contraseña incorrectos");
    }
}
