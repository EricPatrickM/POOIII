import Corretora from "./Corretora/Corretora";
import Commodities from "./Inscritos/Commodities";
import ICommodities from "./Inscritos/ICommodities";

const corretora : Corretora = new Corretora()

let IBM : ICommodities = new Commodities('IBM', 2.50)
let Cisco : ICommodities = new Commodities('CISCO', 4.00)
let NVIDIA : ICommodities = new Commodities('NVIDIA', 10.00)

corretora.inscrever(IBM)
corretora.inscrever(Cisco)
corretora.inscrever(NVIDIA)
corretora.inscrever(IBM)
corretora.desinscrever(IBM)
corretora.desinscrever(IBM)

setInterval(()=>{
    const numero = Math.random()/100+1
    corretora.alteracaoValorDolar(numero)
}, 3000)