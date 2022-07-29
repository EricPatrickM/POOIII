import IPlataforms from "./IPlataform";

export default class Twitch implements IPlataforms{
    constructor(){
        this.configureRMTP()
        console.log('TWITCH: Plataforma iniciada')
    }
    configureRMTP(): void {
        this.authToken()
        console.log('TWITCH: Configurando broadcast!!')
    }
    authToken(): void {
        console.log('TWITCH: Autorizando a aplicacão!!')
    }
}