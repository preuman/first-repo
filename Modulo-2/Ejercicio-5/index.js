
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


function personaMasJoven (lista) {
    let nombreMenor;
    let edadMenor = 99;

    for (let i=0 ; i < 5 ; i++) {
        if (lista[i].edad < edadMenor) {
            nombreMenor = lista[i].nombre;
            edadMenor = lista[i].edad;
        }
    }

    return nombreMenor;
}

function personaMasVieja (lista) {
    let nombreMayor;
    let edadMayor = 0;

    for (let i=0 ; i < 5 ; i++) {
        if (lista[i].edad > edadMayor) {
            nombreMayor = lista[i].nombre;
            edadMayor = lista[i].edad;
        }
    }

    return nombreMayor;
}

console.log(personaMasJoven(personas));

console.log(personaMasVieja(personas));