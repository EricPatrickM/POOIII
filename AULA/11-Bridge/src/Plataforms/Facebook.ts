import IPlataforms from "./IPlataform";

export default class Facebook implements IPlataforms{
    constructor(){
        this.configureRMTP()
        console.log('FACEBOOK: Plataforma iniciada')
    }
    configureRMTP(): void {
        this.authToken()
        console.log('FACEBOOK: Configurando broadcast!!')
    }
    authToken(): void {
        console.log('FACEBOOK: Autorizando a aplicacão!!')
    }
}