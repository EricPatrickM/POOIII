import Cliente from './deliveryFactory/cliente/Cliente'
import IDeliveryFactory from '../src/deliveryFactory/Delivery/interfaces/IDeliveryFactory'
import AiqFomeDelivery from '../src/deliveryFactory/Delivery/AiqFomeDelivery'
import IFoodDelivery from '../src/deliveryFactory/Delivery/IFoodDelivery'

let cliente : Cliente
let factory : IDeliveryFactory

factory = new IFoodDelivery()

cliente = new Cliente(factory)

cliente.Alimentos()

factory = new AiqFomeDelivery()

cliente = new Cliente(factory)

cliente.Alimentos()