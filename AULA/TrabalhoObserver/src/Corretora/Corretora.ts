import Commodities from "../Inscritos/ICommodities";

export default class Corretora{
    private inscritos : Commodities[] = []
    private valorDolar : number
    inscrever(obj : Commodities) : void{
        for(let x of this.inscritos){
            if(x == obj){
                console.log('OBJETO JÁ ESTA CADASTRADO!!')
                return
            }
        }
        this.inscritos.push(obj)
    }
    desinscrever(obj : Commodities):void {
        for(let x of this.inscritos){
            if(x == obj){
                this.inscritos.splice(this.inscritos.indexOf(obj), 1)
                return
            }
        }
        console.log('OBJETO NAO ESTA CADASTRADO!!')
    }
    notifySubscrivers() : void{
        for(let x of this.inscritos){
            x.update(this.valorDolar)
        }
    }
    alteracaoValorDolar(valor : number) : void{
        console.log('alteracao do valor do dolar!!')
        this.valorDolar = valor
        this.notifySubscrivers()
    }
}