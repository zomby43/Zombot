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

        var arrmuertes = [
            "ser atropellado por un auto ql XD",
            "apuñalado por un Venezolano un Estacion Central",
            "ser baleado por los pacos",
            "por un Veneca que te queria asaltar y te disparó",
            "por combustión espontánea",
            "ser succionado por un vortex",
            "en un partido del colo con la U",
            "ser linchado por andar robando",
            "en un viaje a Estados Unidos y te llegó un balazo de la nada",
            "por causas naturales tratando de entender Javascript",
            "tratando de hacer marihuana con Javascript y Maizena",
            "durante el fin del mundo",
            "te raptaron los Aliens y te disecaron",
            "durante el Festival de Viña y te llegó un gaviotazo en la cabeza",
            "ser pisado por un Minion",
            "cancer por deficiencia de tulaperaconlapapaya",
            "ahogarse comiendo una longaniza",
            "en un incendio en tu casa por cocinar arroz con leche",
            "fumar pasta base pensando que era marihuana",
            "ser asaltado por una banda de Minions (Bob, Stuart y Kevin)",
            "que el orangutan Valentino te confundió con una banana y te comió",
            "ser asaltado y asesinado por una banda de monos en Brasil"
        ];
        
        var causamuerte = arrmuertes[Math.floor(Math.random() * arrmuertes.length)];



        alert("Tu nombre es "+nombre+"\nLa causa de tu muerte fue "+causamuerte+"\n En el año: "+anniomuerte+" a la edad de: "+edadnueva+" años.\nCuidado !!!! ☠")
}
