import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardware } from 'src/app/models/hardware';
import { HardwareFirebaseService } from 'src/app/service/hardware-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  hardwares : Hardware[];

  constructor(private activatedRoute: ActivatedRoute, private router : Router, 
    private hardwareService:HardwareFirebaseService) { }
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  carregarContatos(){
    this.hardwareService.getHardwares()
    .subscribe(res => {
      this.hardwares = res.map(c =>{
       return{
        id: c.payload.doc.id,
        ...c.payload.doc.data() as Hardware
       }as Hardware;
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
