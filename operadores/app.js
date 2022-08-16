const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
console.log('Esse programa vai checar se você e maior de 18 anos e tem habilitação para saber se você pode entra no kart');
console.log('Além das suas verificações, precisamos verificar se você esta na lista de presença do horário');

readLine.question('Qual ano do seu nascimento?', ano =>{
    if (ano > 2004){
        console.log('Você nao tem 18 anos');
    }else{
        readLine.question('Você tem habilitação?(Sim/Não)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Voce não tem habilitação para entrar no Kart')
            }else{
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                            break
                        case 'Rafael':
                            console.log('bem vindo ao Kart Rafael');
                        default:
                            console.log('Seu nome não foi identificado na lista de presença')
                    }
                });
            }
        })
    }

});