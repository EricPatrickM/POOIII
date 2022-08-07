import Database from "../Server/Database";
import PermissionType from "../Server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        console.log('Verificando Permissao!')
        const user = Database.filter(item => {
            item.email === email
        })
        if(!user.length){
            console.log('Usuario nao cadastrados!')
        }
        if(user[0].permission == PermissionType.ADMIN){
            console.log('Seja bem vindo administrador!!')
        }else{
            console.log('Seja bem vindo usuario!!')
        }
        
        return this.checkNext(email, password)
    }

}