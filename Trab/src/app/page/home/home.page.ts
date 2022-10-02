import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardware } from 'src/app/models/hardware';
import { HardwareFirebaseService } from 'src/app/service/hardware-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  hardwares : Hardware[];

  constructor(private activatedRoute: ActivatedRoute, private router : Router, 
    private hardwareService:HardwareFirebaseService) { 
      this.carregarContatos();
    }
    
  carregarContatos(){
    this.hardwareService.getHardwares().subscribe(res => {
      this.hardwares = res.map(h =>{
        return{
          id : h.payload.doc.id,
          ...h.payload.doc.data() as Hardware
        } as Hardware;
      })
    });
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }
  irParaDetalhar(value : Hardware){
    this.router.navigateByUrl("/detalhar", {state:{Objeto : value}});
  }

}
