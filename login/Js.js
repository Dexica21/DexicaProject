
function Entrar(){
    var Usuario = document.getElementById('input1').value;
    var Contraseña = document.getElementById('input2').value;


    if (Usuario === "" && Contraseña === "") {
        alert("Ingrese datos en los campos");

    }else if(Usuario === "Denilson" && Contraseña === "123"){
        //guardamos la variable en el localStorage
        localStorage.setItem('Usuario', Usuario);
        window.location.href = "../Menu/index.html";
    }
    else if(Usuario === "Dexica" && Contraseña === "123"){
        //guardamos la variable en el localStorage
        localStorage.setItem('Usuario', Usuario);
        window.location.href = "../Menu/index.html";
    } 
    else {
        alert("Usuario o contraseña incorrectos");
    }
}
