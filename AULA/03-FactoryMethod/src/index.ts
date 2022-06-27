import BicycleTransport from "./transport/BicycleTransport"
import CarTransport from "./transport/CarTransport"
import MotorcycleTransport from "./transport/MotorcycleTransport"
import { Transport } from "./transport/transport"


declare var process

let transport : Transport

if(process.argv.includes("uber")){
    transport = new CarTransport()
} else if(process.argv.includes("eats")){
    transport = new MotorcycleTransport()
} else {
    console.error('Selecione um tipo de tranporte')
}
console.log(process.argv)

if(transport !){
    transport.startTransport()
}

transport = new BicycleTransport()
transport.startTransport()
