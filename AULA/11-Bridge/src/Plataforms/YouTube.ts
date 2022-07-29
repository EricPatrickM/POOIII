import IPlataforms from "./IPlataform";

export default class YouTube implements IPlataforms{
    constructor(){
        this.configureRMTP()
        console.log('YOUTUBE: Plataforma iniciada')
    }
    configureRMTP(): void {
        this.authToken()
        console.log('YOUTUBE: Configurando broadcast!!')
    }
    authToken(): void {
        console.log('YOUTUBE: Autorizando a aplicacão!!')
    }
}