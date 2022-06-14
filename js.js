function muerte(){
    var nombre = document.Muerte.inputName.value
    var edad = parseInt(document.Muerte.inputEdad.value)
    random = Math.floor(Math.random() * 50);
    anniomuerte = 2022 + random
    edadnueva = edad + random

    if(nombre.length<3){
        alert("Nombre debe tener 3 o mas caracteres")
        return false;
    }

    if (edad < 18 || edad > 100){
        alert("Edad Invalida")
        return false
        }

    cadena = "Vas a morir el año: "+anniomuerte+" a la edad de: "+edadnueva+
    alert(cadena)

    
    

}