import IPlataforms from "./Plataforms/IPlataform";
import YouTube from "./Plataforms/YouTube";
import Facebook from "./Plataforms/Facebook";
import Live from "./Transmission/Live";
import Twitch from "./Plataforms/Twitch";
import AdvancedLive from "./Transmission/AdvancedLive";

function startLive(plataform : IPlataforms){
    console.log('Aguarde!!')
    const live = new Live(plataform)
    live.broadcast()
    live.result()
}

function startAdvancedLive(plataform : IPlataforms){
    console.log('Aguarde!!')
    const live = new AdvancedLive(plataform)
    live.broadcast()
    live.result()
    live.subtitles()
    live.comments()
}

startLive(new YouTube())
startLive(new Twitch())
startAdvancedLive(new Facebook())