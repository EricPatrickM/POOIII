import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    NomeComida(nome : string): void {
        console.log('Comendo')
    }
}