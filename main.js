//criar um laço para terminar quando a palavra "sair" for escrita e retornar o resultado da ordenação
//utilizar promises e readline module
//ordenar os inputs em ordem alfabetica
//use chalk to color the output

var readline = require('readline');
var rl = readline.createInterface(
 process.stdin, process.stdout
);


const receiveData = () => {
  let array = []
  rl.setPrompt(`Digite uma propriedade `);
  rl.prompt();

  rl.on('line', function (userInput) { //line é um evento
    console.log(`Received: ${userInput}`);
    array.push(userInput)
    console.log(array) 
    if(userInput === 'sair'){ 
      process.stdout.write('\n' + array.sort() + '\n')
      process.exit()
    }
 });
}
receiveData()

