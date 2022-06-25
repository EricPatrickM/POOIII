import Carro from "./Carro"

let carro : Carro = new Carro('Fiat', 'Uno')

console.log(carro.Modelo)
carro.Modelo='Fi'
console.log(carro.Modelo)
carro.ligar()