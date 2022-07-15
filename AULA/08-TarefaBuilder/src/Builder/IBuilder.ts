import { Bread } from "../Components/Bread";
import Protein from "../Components/Protein";
import Salad from "../Components/Salad";
import { SanduicheType } from "../Components/SanduicheType";
import Sauces from "../Components/Sauces";
import Sanduiche from "../Product/Sanduiche";

export default interface IBuilder{
    reset() : void;
    getSanduiche() : Sanduiche;
    setSanduicheType(value : SanduicheType) : void
    setBread(value : Bread) : void
    setProtein(value : Protein) : void
    addSalad(value : Salad) : void
    addSauces(value : Sauces) : void
}