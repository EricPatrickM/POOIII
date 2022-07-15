export default class Protein{
    private _carne : string;
    constructor(value : string){
        this._carne = value
    }
    set carne(value : string){
        this._carne = value
    }
    get carne() : string{
        return this._carne
    }
}