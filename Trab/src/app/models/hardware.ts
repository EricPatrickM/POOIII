export class Hardware{
    private _id: string;
    private _tipo : string;
    private _marca : string;
    private _modelo : string;
    private _preco : string;
    private _quantidade : string;
    private _desconto : number;
    private _dataLancamento: number;
    private _downloadURL : any;

    constructor(tipo : string, marca: string, modelo : string, 
        preco : string, desconto:number, quantidade : string, 
        dataLancamento:number){
            this._tipo = tipo;
            this._marca = marca;
            this._modelo = modelo;
            this._preco = preco;
            this._quantidade = quantidade;
            this._desconto = desconto;
            this._dataLancamento = dataLancamento;
    }
     public get id() : string{
        return this._id;
    }
    public get tipo() : string{
        return this._tipo;
    }
    public set tipo(tipo : string){
        this._tipo = tipo;
    }
    public get marca() : string{
        return this._marca
    }
    public set marca(marca : string){
        this._marca = marca;
    }
    public get modelo() : string{
        return this._modelo;
    }
    public set modelo(modelo : string){
        this._modelo = modelo;
    }
    public get preco() : string{
        return this._preco;
    }
    public set preco(preco : string){
        this._preco = preco;
    }
    public get quantidade() : string{
        return this._quantidade;
    }
    public set quantidade(quantidade : string){
        this._quantidade = quantidade;
    }
    public get desconto() : number{
        return this._desconto;
    }
    public set desconto(desconto : number){
        this._desconto = desconto;
    }
    public get dataLancamento() : number{
        return this._dataLancamento;
    }
    public set dataLancamento(desconto : number){
        this._dataLancamento = desconto;
    }
    public get downloadURL(): any{
        return this._downloadURL;
    }
    public set downloadURL(downloadURL: any){
    this._downloadURL = downloadURL;
    }
}