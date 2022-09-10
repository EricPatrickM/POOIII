import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardware } from 'src/app/models/hardware';
import { HardwareService } from 'src/app/service/hardware.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  folder: string;
  harware : string[];
  hardwares : Hardware[];

  constructor(private activatedRoute: ActivatedRoute, private router : Router, 
    private hardwareService:HardwareService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.hardwares=this.hardwareService.hardwares
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }
  irParaDetalhar(value : Hardware){
    console.log(value)
    this.router.navigateByUrl("/detalhar", {state:{Objeto : value}});
  }

}
