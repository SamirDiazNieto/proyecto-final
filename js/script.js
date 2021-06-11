function ValidaNombre() {
    var nombre = document.getElementById("nombres").value;
    let mensajeNombre = document.getElementById("msjNombres");
    if (nombre.length < 7) {
        mensajeNombre.innerText = "  El nombre minimo 7 caracteres"
        mensajeNombre.classList.remove("exito");
        mensajeNombre.classList.add("error");
        return false;
    } else {
        mensajeNombre.innerText = "  El nombre es correcto."
        mensajeNombre.classList.remove("error");
        mensajeNombre.classList.add("exito");
        return true;
    }
}
function ValidarCorreo() {

    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo = document.getElementById("correo").value;
    let msjCorreo = document.getElementById("msjCorreo");

    if (!regex.test(correo)) {
        msjCorreo.innerText = "  Ingrese un correo valido.";
        msjCorreo.classList.remove("exito");
        msjCorreo.classList.add("error");
        return false;
    } else {
        msjCorreo.innerText = "  El correo es valido.";
        msjCorreo.classList.remove("error");
        msjCorreo.classList.add("exito"); 
        return true;
    }
}
function ValidarCelular() {
    console.log("entro a la function")
    // let regex = /[0-9]{10}/;
    var celular = document.getElementById('celular').value;
    let msjCelular = document.getElementById('msjCelular');
    console.log("va a convertir la variable")
    let cel =Number(celular);
    console.log(typeof cel + "tipo: "+cel)
    if (cel === 0){
        console.log("entro 1")
        msjCelular.innerHTML = "  Ingrese solo numeros "
        msjCelular.classList.remove("exito");
        msjCelular.classList.add("error");
        return false;

    } else if (celular.length < 10 || celular.length > 10) {
        console.log("entro 2")
        msjCelular.innerHTML = "  Ingrese un numero valido"
        msjCelular.classList.remove("exito");
        msjCelular.classList.add("error");
        return false;
    } else {
        msjCelular.innerHTML = "  El numero es valido"
        msjCelular.classList.remove("error");
        msjCelular.classList.add("exito");
        return true;
    }

}
function ValidarTipo() {
    var cargo = document.getElementById('opcion').value;
    let msjCargo = document.getElementById('msjOpcion');

    if (cargo === 'Voluntario' || cargo === 'Aporte' || cargo === 'Servicio' || cargo === 'Duda') {

        msjCargo.innerText = "  La opción es valida"
        msjCargo.classList.remove("error");
        msjCargo.classList.add("exito");
        return true;
    } else {
        msjCargo.innerText = "  Elija una opción de la lista"
        msjCargo.classList.remove("exito");
        msjCargo.classList.add("error");

        return false;
    }


}
function ValidarTextarea() {
    var texto = document.getElementById('texto').value;
    let msjTexto = document.getElementById('msjTexto');

    if (texto.length <= 10) {

        msjTexto.innerHTML = "  El mensaje debe tener como minimo 10 caracteres"
        msjTexto.classList.remove("exito");
        msjTexto.classList.add("error");
        return false;
    } else {
        msjTexto.innerHTML = "  Mensaje correcto"
        msjTexto.classList.remove("error");
        msjTexto.classList.add("exito");
        return true;
    }


}



var mensaje = [];  
function crearMensaje() {

// console.log(ValidaNombre());
// console.log(ValidarCelular());
// console.log(ValidarTipo());
// console.log(ValidarCorreo());
// console.log(ValidarTextarea());

     if (ValidaNombre() == true &&  ValidarCelular() == true &&  ValidarTipo() == true && ValidarCorreo() == true && ValidarTextarea() == true) {

        nombre = document.getElementById('nombres').value;
        mensaje.push(nombre);
        correo = document.getElementById('correo').value;
        mensaje.push(correo);
        celular = document.getElementById('celular').value;
        mensaje.push(celular);
        tipo = document.getElementById('opcion').value;
        mensaje.push(tipo);
        texto = document.getElementById('texto').value;
        mensaje.push(texto);


        console.log(mensaje)
          alert("Se agrego mensaje correctamente");
        
    } else {
        alert("Varifique los datos ingresados");
    }
}


