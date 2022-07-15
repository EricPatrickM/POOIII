import { Bread } from "../Components/Bread";
import Protein from "../Components/Protein";
import Salad from "../Components/Salad";
import { SanduicheType } from "../Components/SanduicheType";
import Sauces  from "../Components/Sauces";

export default class Sanduiche{
    private _bread : Bread;
    private _protein : Protein
    private _sanduicheType : SanduicheType
    private _salad : Salad[] = []
    private _sauces : Sauces[] = []

    get bread() : Bread{
        return this._bread;
    }

    set bread(value : Bread){
        this._bread = value
    }


    get protein() : Protein{
        return this._protein;
    }

    set protein(value : Protein){
        this._protein = value
    }

    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }

    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value
    }

    get salad() : Salad[]{
        return this._salad;
    }

    addSalad(value : Salad){
        this._salad.push(value)
    }

    get sauces() : Sauces[]{
        return this._sauces;
    }

    addsauces(value : Sauces){
        this._sauces.push(value)
    }   
}