import IDrink from "../Drink/interfaces/IDrink";
import IFood from "../Food/interfaces/IFood";
import HotDog from "../Food/HotDog";
import SoftDrink from '../Drink/SoftDrink'
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink{
        return new SoftDrink()
    }
    createDeliveryFood(): IFood{
        return new HotDog()
    }
}
