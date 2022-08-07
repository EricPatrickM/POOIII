import ICommodities from "./ICommodities";

export default class Commodities implements Commodities{
    constructor(private commodities:string, private preco:number){

    }
    update(valorDolar:number): void {
        console.log(this.commodities + ' ' + this.preco + ' -> ' + this.preco*valorDolar)
    }
}