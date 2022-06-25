import {sexo} from './Util/Enum'  

export class Usuario{
    private _nome : string
    private _cpf : number
    private _rg : number 
    private _sexo : sexo
    private _endereco:Endereco
    constructor(nome:string, cpf:number, rg:number, sexo:sexo, Endereco:Endereco ){
        this._nome = nome
        this._cpf = cpf
        this._rg = rg
        this._sexo = sexo
        this._endereco = Endereco
        console.log('Usuario cadastrado!!')
    }
    get nome(){
        return this._nome
    }
}

export class Endereco{
    private _rua : string
    private _numero : number
    private _cep : number
    private _bairro : string
    private _cidade : string
    constructor(rua: string, numero:number,cep:number, bairro:string,cidade:string){
        this._rua = rua
        this._numero = numero
        this._cep = cep
        this._bairro = bairro
        this._cidade = cidade
        console.log('Endereco cadastrado!!')
    }
}