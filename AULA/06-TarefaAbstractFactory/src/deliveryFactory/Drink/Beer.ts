import IDrink from './interfaces/IDrink' 

export default class Beer implements IDrink{
    NomeBebida(nome: string): void {
        console.log('Bebendo')
    }
}