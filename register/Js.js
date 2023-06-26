function Registrar(){
    var NombreUsuario = document.getElementById('inputUsuario').value;
    var CorreoUsuario = document.getElementById('inputCorreo').value;
    var PasswordUsuario = document.getElementById('inputPass').value;

    FormatoCorreo = /\w+@\w+\.+[a-z]/;
    FormatoUsuario = /[a-zA-Z0-9]/;
    

    if(NombreUsuario === "" || CorreoUsuario ==="" || PasswordUsuario===""){
        alert("Ingrese datos a los campos");
    }
    else if(!FormatoUsuario.test(NombreUsuario)){
        alert("Usuario solo admite letras y números")
    }
    else if(!FormatoCorreo.test(CorreoUsuario)){
        alert("El correo no tiene un formato valido");
    } 
    else{
        alert("Usuario Registrado Correctamente")
    }
}