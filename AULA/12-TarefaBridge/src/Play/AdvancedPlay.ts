import IConsole from "../Console/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console: IConsole){
        super(console)
    }
    challenge(){
        console.log('MODO DESAFIO')
    }
}