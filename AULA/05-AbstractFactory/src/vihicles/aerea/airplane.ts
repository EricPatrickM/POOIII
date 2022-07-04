import iAircraft from "./Interfaces/iAircraft";

export default class airplane implements iAircraft{
    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log('Aviao iniciando decolagem!')
    }
    getCargo(): void {
        console.log('Passageiros embarcados!')
    }
    checkWind(): void {
        console.log('Checando ventos: OK!')
    }
}