import IVihicle from './interfaces/IVehicle'

export default class Motorcycle implements IVihicle{
    StartRoute(): void {
        this.getcargo()
        console.log('Moto: Iniciando trajeto')
    }
    getcargo(): void {
        console.log('Moto: Encomenda retirada!')
    }
}