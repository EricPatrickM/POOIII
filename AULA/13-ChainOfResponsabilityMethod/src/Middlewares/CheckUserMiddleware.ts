import Database from "../Server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        console.log('Verificando usuario')
        if(email.indexOf('@') === -1){
            console.error('Email invalido!!')
            return false
        }
        if(!Database.filter((item)=>{
            item.email == email && item.password == password
        }).length){
            console.error('Usuario nao encontrado!!')
            return false
        }
        return this.checkNext(email, password)
    }

}