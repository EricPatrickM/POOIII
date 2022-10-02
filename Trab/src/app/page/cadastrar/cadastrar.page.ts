import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Hardware } from '../../models/hardware';
import { HardwareFirebaseService } from '../../service/hardware-firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage implements OnInit {
  data : string3
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;
  valorTotal: number = 0.00


  async handleValorTotal(){
    const preco = parseFloat(this.formCadastrar.value.preco.replace(',','.'))
    const value = Math.round((this.formCadastrar.value.quantidade*preco*(1-this.formCadastrar.value.desconto/100)) * 100) / 100;
    if(isNaN(value)){
      this.valorTotal=0.00
    } else {
      this.valorTotal = value
    }
  }
  constructor(private router: Router,
    private hardwareService: HardwareFirebaseService,
    private formBuilder: FormBuilder,
  private alertController : AlertController) { }
  

  submitForm(){
    if(!this.formCadastrar.valid){
      this.presentAlert("Cadastro", "Erro", "Todos os campos sao obrigatorios");
      return false
    } else {
      this.cadastrar()
    }
  }

  get errorControl(){
    return this.formCadastrar.controls
  }

  ngOnInit() {
    this.data = new Date().toISOString();
    this.formCadastrar = this.formBuilder.group({
      tipo : ["", [Validators.required]],
      marca:["", [Validators.required]],
      modelo:["", [Validators.required]],
      preco:["", [Validators.required, Validators.pattern('^[0-9]*.[0-9]*')]],
      desconto:["0", [Validators.required]],
      quantidade:[1, [Validators.required, Validators.pattern('^[0-9]*')]],
      dataLancamento : ["", [Validators.required]],
      image : ["", [Validators.required]]
    });
    this.handleValorTotal()
  }

  private cadastrar(){
    this.showLoading("Aguarde", 10000)
  }

  async presentAlert(header:string, subHeader:string,massage:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: massage,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showLoading(mensagem : string, duracao : number){
    const loading = await this.loadingCtrl.create({
      message: mensagem,
      duration: duracao,
    });

    loading.present();
  }
}
