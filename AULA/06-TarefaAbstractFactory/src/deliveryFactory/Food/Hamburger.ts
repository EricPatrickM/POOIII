import IFood from "./interfaces/IFood";

export default class Hamburger implements IFood{
    NomeComida(nome : string): void {
        console.log('Comendo')
    }
}