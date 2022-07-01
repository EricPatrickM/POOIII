import IItem from "./interface/IItem";

export default class Movie implements IItem{
    private _descricao : string
    constructor(descricao : string){
        this._descricao=descricao
    }
    start(): void {
        console.log('INICIANDO')
    }
    getDescription(): string {
        return "Descrição: " + this._descricao;
    }

}