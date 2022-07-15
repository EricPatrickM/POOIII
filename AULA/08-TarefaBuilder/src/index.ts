import Builder from "./Builder/Builder"
import Director from "./Director/Director"
import Sanduiche from "./Product/Sanduiche"


const builder : Builder = new Builder()
const director : Director = new Director(builder)

director.constructorHOTDOG()

let sanduiche : Sanduiche = builder.getSanduiche()
console.log(sanduiche.sanduicheType)
console.log(sanduiche.bread)
console.log(sanduiche.protein)
console.log(sanduiche.salad)
console.log(sanduiche.sauces)

director.constructorXSalada()

sanduiche = builder.getSanduiche()
console.log(sanduiche.sanduicheType)
console.log(sanduiche.bread)
console.log(sanduiche.protein)
console.log(sanduiche.salad)
console.log(sanduiche.sauces)