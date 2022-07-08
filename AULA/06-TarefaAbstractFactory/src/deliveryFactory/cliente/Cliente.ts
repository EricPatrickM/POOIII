import IDrink from '../Drink/interfaces/IDrink'
import IFood from '../Food/interfaces/IFood'
import IDeliveryFactory from '../Delivery/interfaces/IDeliveryFactory'


export default class Cliente{
    private Drink : IDrink
    private Food : IFood
    constructor(factory : IDeliveryFactory){
        this.Drink = factory.createDeliveryDrink()
        this.Food = factory.createDeliveryFood()
    }
    Alimentos(){
        this.Drink.NomeBebida('')
        this.Food.NomeComida('')
    }
}