import ILand from "./interfaces/ILand";

export default class Motorcycle implements ILand{
    startRoute(): void {
        this.getCargo()
        console.log('Moto: Iniciando viajem')
    }
    getCargo(): void {
        console.log('Moto: Clientes embarcados')
    }
}