import IAnimal from './interface/IAnimal'

export default class Cachorro implements IAnimal{
    private _animal : string = '';
    getAnimal() : string {
        return this._animal
    }
    setAnimal(nome : string) : void {
        this._animal=nome
    }

}