const listaArgumentos = process.argv.slice(2);

console.log('------------------------------ Executando m FOR --------------------------------')

for (let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){

    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);

}

console.log('------------------------------ Executando WHILE --------------------------------')

let controladorWhile =0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++
}


console.log('------------------------------ Executando DO WHILE --------------------------------')

let controladorDoWhile = 0;

do{
    console.log(`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length);

console.log('------------------------------ Executando FOR OF --------------------------------');


let controladorForOf =0;
for (const argumento of listaArgumentos){
    console.log(`Posicao ${controladorForOf} valor lido = ${argumento}`);
    controladorForOf++;
}

for (const argumento of listaArgumentos){
    console.log(`valor lido = ${argumento}`);

}