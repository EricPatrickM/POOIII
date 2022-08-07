export default abstract class Middleware{
    public next : Middleware
    public linkWith(next:Middleware) : Middleware{
        this.next = next
        return this.next
    }
    protected checkNext(email:string, password:string) : boolean{
        if(this.next === undefined){
            return true
        }
        return this.next.checkNext(email,password)
    }

    public abstract check(email:string, password:string):boolean

}