console.log(`LOOPS`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada ==true); 
  
let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe.");
        destinoExiste=true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!!");
}else{
    console.log("Desculpe, tivemos um erro")
}

for(let i=0;i < 3; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste=true;
        console.log("Achou");
    }
}




