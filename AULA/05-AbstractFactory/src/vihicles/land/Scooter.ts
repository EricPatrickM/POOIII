import ILand from "./interfaces/ILand";

export default class Scooter implements ILand{
    startRoute(): void {
        this.getCargo()
        console.log('Scooter: Iniciando viajem')
    }
    getCargo(): void {
        console.log('Scooter: Clientes embarcados')
    }
}