import { Bread } from "../Components/Bread";
import Protein from "../Components/Protein";
import Salad from "../Components/Salad";
import { SanduicheType } from "../Components/SanduicheType";
import Sauces from "../Components/Sauces";
import Sanduiche from "../Product/Sanduiche";
import IBuilder from "./IBuilder";

export default class Builder implements IBuilder{
    private sanduiche : Sanduiche = new Sanduiche()

    reset(): void {
        this.sanduiche = new Sanduiche()
    }
    getSanduiche(): Sanduiche {
        return this.sanduiche
    }
    setSanduicheType(value: SanduicheType): void {
        this.sanduiche.sanduicheType = value
    }
    setBread(value: Bread): void {
        this.sanduiche.bread = value
    }
    setProtein(value: Protein): void {
        this.sanduiche.protein = value
    }
    addSalad(value: Salad): void {
        this.sanduiche.addSalad(value)
    }
    addSauces(value : Sauces){
        this.sanduiche.addsauces(value)
    }
}