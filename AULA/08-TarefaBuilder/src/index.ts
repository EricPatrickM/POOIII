import Builder from "./Builder/Builder"
import Director from "./Director/Director"
import Sanduiche from "./Product/Sanduiche"


const builder : Builder = new Builder()
const director : Director = new Director(builder)

director.constructorHOTDOG()

let sanduiche : Sanduiche = builder.getSanduiche()
console.log('TIPO: ', sanduiche.sanduicheType)
console.log('PAO: ', sanduiche.bread)
console.log('PROTEINA: ', sanduiche.protein)
console.log('SALADA: ', sanduiche.salad)
console.log('MOLHO', sanduiche.sauces)

director.constructorXSalada()

sanduiche = builder.getSanduiche()
console.log('TIPO: ', sanduiche.sanduicheType)
console.log('PAO: ', sanduiche.bread)
console.log('PROTEINA: ', sanduiche.protein)
console.log('SALADA: ', sanduiche.salad)
console.log('MOLHO', sanduiche.sauces)