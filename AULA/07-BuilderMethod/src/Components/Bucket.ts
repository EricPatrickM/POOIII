export class Bucket{
    private _size : number;

    set size(size : number){
        this._size = size;
    }
    get size() : number{
        return this._size
    }
}