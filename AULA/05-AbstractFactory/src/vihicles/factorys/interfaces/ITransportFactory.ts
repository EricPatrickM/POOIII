import ILand from '../../land/interfaces/ILand'
import iAircraft from '../../aerea/Interfaces/iAircraft'

export default interface ITranportFactory{
    createLandVehicle():ILand
    createAereaVehicle():iAircraft
}