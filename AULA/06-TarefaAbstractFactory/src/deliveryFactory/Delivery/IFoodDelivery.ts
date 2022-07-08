import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import IDrink from "../Drink/interfaces/IDrink";
import IFood from "../Food/interfaces/IFood";
import Hamburger from "../Food/Hamburger";
import Beer from "../Drink/Beer";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink{
        return new Beer()
    }
    createDeliveryFood(): IFood{
        return new Hamburger()
    }

}