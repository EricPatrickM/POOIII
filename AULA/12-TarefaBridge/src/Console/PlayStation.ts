import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.authToken()
        this.configureGame()
    }
    configureGame(): void {
        console.log('PLAYSTATION: CONFIGURADO!!')
    }
    authToken(): void {
        console.log('PLAYSTATION: TOKEN CRIADO!!')
    }

}