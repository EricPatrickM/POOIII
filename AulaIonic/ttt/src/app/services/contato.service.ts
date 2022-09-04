import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private _contatos : Contato[] = []

  constructor() { 
    this._contatos.push(new Contato("eric", 2931293, "Masculino", "2000-12-12"))
  }
  
  public get contatos() : Contato[]{
    return this._contatos
  }
  
  public inserir(contato:Contato){
    this._contatos.push(contato)
  }

  public editar(contato:Contato, nome:string, telefone:number, genero:string, dataNascimento:string) : boolean{
    for(let i=0;i < this._contatos.length;i++){
      if(this.contatos[i].id == contato.id){
        this.contatos[i].nome = nome
        this.contatos[i].telefone = telefone
        this.contatos[i].dataNascimento = dataNascimento
        this.contatos[i].genero = genero
        return true
      }
    }
    return false
  }

  public excluir(contato:Contato) : boolean{
    for(let i=0;i < this._contatos.length;i++){
      if(this.contatos[i].id == contato.id){
        this.contatos.splice(i,1)
        return true
      }
    }
    return false
  }
}