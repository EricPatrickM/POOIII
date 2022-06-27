import IVihicle from './Vihicles/interfaces/IVehicle'

export abstract class Transport{
    protected abstract CreateTransport() : IVihicle

    startTransport() : void {
        const Vehicle = this.CreateTransport()
        Vehicle.StartRoute()
    }
}