import IFood from '../../Food/interfaces/IFood'
import IDrink from '../../Drink/interfaces/IDrink'

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}