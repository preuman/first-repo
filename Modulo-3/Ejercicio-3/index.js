let clave = 4455;

//console.log(adivinarPin(clave));

console.log(adivinarPinInfinito(clave));

function adivinarPin (numero) {
    for (let i=0; i<3; i++) {
        let pin = prompt('Introduce el PIN:');
        if (pin == numero) {
            return '¡Eso fue correcto!';
        }
        else {console.log('Lo siento, eso estaba mal.');}
    }
    return;
}

function adivinarPinInfinito (numero) {
    let pin;
    do {
        let pin = prompt('Introduce el PIN:');
        if (pin == numero) {
            return '¡Eso fue correcto!';
        }
        else {
            if (pin == 'salir') { return;}
            else {console.log('Lo siento, eso estaba mal.');}
        }

    } while (pin != 'salir')

}