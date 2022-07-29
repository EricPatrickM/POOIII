import IConsole from "../Console/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{
    constructor(private console : IConsole){

    }
    playing(): void {
        console.log('Jogando!!')
        this.result()
    }
    result(): void {
        console.log('Correto!!')
    }

}