let pin = prompt('Introduce el palabra:');

//console.log(adivinarPin(clave));

console.log(esPalindromo(pin));

function esPalindromo (palabra) {
    let palabrainversa = '';
    let numero = palabra.length - 1;

    for (let i = numero ; i >=0 ; i--) {
        palabrainversa = palabrainversa + palabra.charAt(i);
    }

    if (palabrainversa == palabra) {return palabra + ' es un palindromo';}
    else {return palabra + ' NO es un palindromo';}
}