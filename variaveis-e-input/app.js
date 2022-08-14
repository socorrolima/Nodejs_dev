const readLine= require('readLine').createInterface({
    input: process.stdin,
    output:process.stdout
});


const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log('minhaPrimeiraConstanteString');

let leituraDeCampo;
readLine.question('Por favor digite alguma coisa:', input => {
    leituraDeCampo = input;
    console.log(`o cliente digitou: ${leituraDeCampo}`);
});



