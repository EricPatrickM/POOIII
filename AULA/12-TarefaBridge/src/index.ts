import IConsole from "./Console/IConsole";
import PlayStation from "./Console/PlayStation";
import XBox from "./Console/XBox";
import AdvancedPlay from "./Play/AdvancedPlay";
import Play from "./Play/Play";

function iniciar(plataforma : IConsole){
    const play = new Play(plataforma)
    play.playing()
}

function iniciarDesafio(plataforma : IConsole){
    const play = new AdvancedPlay(plataforma)
    play.challenge()
    play.playing()
}

iniciar(new PlayStation)
iniciarDesafio(new XBox)