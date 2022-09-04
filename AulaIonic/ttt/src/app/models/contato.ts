export class Contato {
    private _name : string
    private _telefone : number
    private _genero : string
    private _dataNascimento : string
    private _id : any;

    constructor(nome : string, telefone :number, genero : string, data:string){
        let chave = new Date;
        this._id = chave.getTime();
        this._name = nome;
        this._telefone = telefone
        this._dataNascimento=data
        this._genero=genero
    }
    public get nome() : string{
        return this._name
    }
    public set nome(value :string){
        this._name=value
    }

    public get telefone() : number{
        return this._telefone
    }
    public set telefone(value :number){
        this._telefone=value
    }

    public get genero() : string{
        return this._genero
    }
    public set genero(value :string){
        this._genero=value
    }

    public get dataNascimento() : string{
        return this._dataNascimento
    }
    public set dataNascimento(value :string){
        this._dataNascimento=value
    }

    public get id() : any{
        return this._id
    }
}
