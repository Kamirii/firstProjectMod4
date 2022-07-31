import readline from "readline";

const rl = readline.createInterface(
     process.stdin, process.stdout
)

const array = []
function input (pergunta){
    return new Promise((resolve, _ ) => {
         rl.question(pergunta,(userInput)=>{
            resolve(userInput.toLowerCase())
        })
    })  
} 

while (!array.includes('sair')){
    const userInput = await input("Digite alguma propriedade CSS: ") //await espera a promise ser concluida
    array.push(userInput)
    console.log(array)
}
rl.close()
array.pop()
array.sort()
console.clear()
console.log("Ordenação: ")
let string = array.toString()
console.log( '\n' + string.split(',').join("\r\n") + '\n');