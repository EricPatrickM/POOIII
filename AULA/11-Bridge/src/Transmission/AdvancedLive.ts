import IPlataforms from "../Plataforms/IPlataform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(plataform : IPlataforms){
        super(plataform)
    }
    subtitles() : void{
        console.log('Legendas Ativadas!!')
    }
    comments() : void{
        console.log('Comentarios liberados!!')
    }
}