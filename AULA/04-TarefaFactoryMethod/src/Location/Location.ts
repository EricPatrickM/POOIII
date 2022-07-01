import IItem from "./Item/interface/IItem";

export default abstract class Location{
    startItem() : void{
        const location = this.createItem()
        console.log(location.getDescription())
    }
    protected abstract createItem() : IItem
}