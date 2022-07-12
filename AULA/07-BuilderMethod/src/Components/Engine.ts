export default class Engine{
    constructor(private _power :number){

    }
    get power() : number{
        return this._power
    }
    set power(value : number){
        this._power = value
    }
}