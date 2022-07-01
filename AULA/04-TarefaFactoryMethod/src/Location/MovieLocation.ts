import Movie from './Item/Movie'
import IItem from './Item/interface/IItem';

export default class MovieLocation extends Location{
    protected createItem() : IItem{
        return new Movie('Drama')
    }
}