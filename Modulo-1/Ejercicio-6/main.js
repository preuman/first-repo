let pokemons = [ {nombre:'Picachu', tipoDePokemon:'electrico'} ,
{nombre:'Charizar', tipoDePokemon:'fuego'} ,
{nombre:'Miutu', tipoDePokemon:'electrico'} ];


for (i=0 ; i < pokemons.length; i++) {
    if (pokemons[i].tipoDePokemon === 'fuego'){ console.log(pokemons[i].nombre + " ¡Es un pokemon de fuego!"); }
}