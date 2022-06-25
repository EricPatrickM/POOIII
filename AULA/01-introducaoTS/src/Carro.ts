export default class Carro{
    private _nome:string
    private _modelo:string
    private _ano:number
    private _marca:string
    private _completo:boolean
    constructor(marca:string, modelo:string){
        this._marca=marca
        this._modelo=modelo
    }

    get Marca() : string{
        return this._marca
    }
    get Modelo() : string {
        return this._modelo
    }
    set Marca(marca:string){
        this._marca=marca
    }
    set Modelo(modelo:string){
        this._modelo=modelo
    }
    ligar(){
        console.log('ligado')
    }
}