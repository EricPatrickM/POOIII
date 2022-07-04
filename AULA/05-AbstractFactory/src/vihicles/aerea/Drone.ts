import iAircraft from "./Interfaces/iAircraft";

export default class Drone implements iAircraft{
    startRoute(): void {
        this.checkWind()
        console.log('Drone iniciando decolagem!')
    }
    getCargo(): void {
        console.log('Passageiros embarcados!')
    }
    checkWind(): void {
        console.log('Checando ventos: OK!')
    }
}