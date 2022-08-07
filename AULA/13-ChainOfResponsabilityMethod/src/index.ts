//import * as readline from '@types/node/readline';
import * as readline from "readline"
import CheckPermissionMiddleware from "./Middlewares/CheckPermissionMiddleware"
import CheckUserMiddleware from "./Middlewares/CheckUserMiddleware"
import Server from "./Server/Server"

declare var process
const server = new Server()

function setPrompQuestion(){
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    })
    rl.question('Digite seu email: ', email=>{
        rl.question('Digite sua senha: ', password=>{
            server.login(email, password)
            rl.close()
        })
    })

    rl.on('close', ()=>{
        setPrompQuestion()
    })
}

const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware())
server.setMiddleware(middleware)
setPrompQuestion()