let muebles = ["Casa" , "Armario", "sofa", "almohada", "alfombra", "Litera"];

const empiezaPorA = muebles.filter((mueble) => {
    return mueble.startsWith('a') ||  mueble.startsWith('A');
});

console.log (empiezaPorA);