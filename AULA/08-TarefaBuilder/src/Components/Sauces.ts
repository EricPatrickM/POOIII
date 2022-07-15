export default class Sauces{
    constructor(private _sauces : string){
        
    }
    get sauces() : string{
        return this._sauces
    }
    set sauces(value : string){
        this._sauces = value
    }
}