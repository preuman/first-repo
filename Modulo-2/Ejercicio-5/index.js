
const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

function personasMayorEdad (lista)  {
    let listaNueva = [];
    let j = 0;
    for (let i=0 ; i<5 ; i++) {
        if (lista[i].edad >= 18) {
        listaNueva[j] = lista[i];
        j++;
        }
    }

    return listaNueva;
}

const mayoresDeEdad = personasMayorEdad(personas);

console.log(mayoresDeEdad);



let edad = Math.min(personas);

console.log (edad);