export default class Salad{
    constructor(value : string){
        this._salad = value
    }
    private _salad : string;
    get salad(){
        return this._salad        
    }
    set salad(value : string){
        this._salad = value
    }
}