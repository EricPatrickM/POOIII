import IConsole from "./IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.authToken()
        this.configureGame()
    }
    configureGame(): void {
        console.log('XBOX: CONFIGURADO!!')
    }
    authToken(): void {
        console.log('XBOX: TOKEN CRIADO!!')
    }
}