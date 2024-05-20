var entrada = require ("readline-sync");

var secreto;
var num = 10;
var tentativa = 0;

while(secreto!=num){
    secreto = entrada.question('Escolhha o numero secreto de 0 a 100:');
    if(secreto == num){
       
        console.log('Você acerto o número!!!');
        console.log('Você tentou ')
    }else if(secreto > num ){
        console.log('Esse número é maior que o secreto.')
    }else if(secreto < num){
        console.log('ESse número é menor que o secreto.')
    }

}