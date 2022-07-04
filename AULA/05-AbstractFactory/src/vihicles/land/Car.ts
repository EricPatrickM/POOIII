import ILand from "./interfaces/ILand";

export default class Car implements ILand{
    startRoute(): void {
        this.getCargo()
        console.log('Carro: Iniciando viajem')
    }
    getCargo(): void {
        console.log('Carro: Clientes embarcados')
    }
}