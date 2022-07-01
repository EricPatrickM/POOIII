import IItem from "./Item/interface/IItem";

export default abstract class Location{
    startItem() : void{
        const loc = this.createItem()
        loc.start()
        console.log(loc.getDescription())
    }
    protected abstract createItem() : IItem
}