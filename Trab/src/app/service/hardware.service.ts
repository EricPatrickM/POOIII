import { Injectable } from '@angular/core';
import { Hardware } from '../models/hardware';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {
  private _hardwares: Hardware[] = [];

  constructor() {
    let _hardware = new Hardware("placaMae", "asrock", "h 510", "5.00", 20, "2");
    this.inserir(_hardware);
  }

  public get hardwares(): Hardware[] {
    return this._hardwares;
  }
  public inserir(hardware: Hardware){
    this._hardwares.push(hardware);
  }

  public editar(hardware: Hardware,
    tipo: string, marca: string, modelo: string,
    preco: string, desconto:number, quantidade: string): boolean {
    for (let i = 0; i < this._hardwares.length; i++) {
      if (this._hardwares[i].id == hardware.id) {
        this._hardwares[i].tipo = tipo;
        this._hardwares[i].marca = marca;
        this._hardwares[i].modelo = modelo;
        this._hardwares[i].preco = preco;
        this._hardwares[i].quantidade=quantidade;
        this._hardwares[i].desconto = desconto;
        return true;
      }
    }
    return false
  }
  
  public excluir(hardware: Hardware): boolean {
    for (let i = 0; i < this._hardwares.length; i++) {
      if (this._hardwares[i].id == hardware.id) {
        this._hardwares.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
