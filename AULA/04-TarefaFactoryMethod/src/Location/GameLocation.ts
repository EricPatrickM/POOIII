import Game from './Item/Game'
import IItem from './Item/interface/IItem';
import Location from './Location';

export default class GameLocation extends Location{
    protected createItem() : IItem{
        return new Game('Magia')
    }
}