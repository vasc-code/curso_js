console.log(`LOOPS`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada ==true); 
  
let contador = 0;

while(contador<3){
    console.log(listaDeDestinos[contador]);
    contador += 1;
}




