import Cachorro from './animal/Cachorro';
import IAnimal from './animal/interface/IAnimal';
import Raca from './Raca'

export default class CachorroRaca extends Raca{
    protected createAnimal(): IAnimal {
        return new Cachorro();
    }
}