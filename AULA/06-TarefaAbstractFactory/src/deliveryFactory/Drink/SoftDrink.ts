import IDrink from './interfaces/IDrink' 

export default class SoftDrink implements IDrink{
    NomeBebida(nome: string): void {
        console.log('Bebendo')
    }
}