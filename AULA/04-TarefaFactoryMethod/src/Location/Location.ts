import IItem from "./Item/interface/IItem";

export default abstract class Location{
    startItem() : void{
        const location = this.createItem()
        location.start()
        console.log(location.getDescription())
    }
    protected abstract createItem() : IItem
}