console.log(`Trabalhando com listas`);
//const salvador = ;
//const saoPaulo = ;
//const rioDeJaneiro = ;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);