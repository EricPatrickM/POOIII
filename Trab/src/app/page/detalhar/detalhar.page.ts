import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Hardware } from '../../models/hardware';
import { HardwareFirebaseService } from '../../service/hardware-firebase.service';


@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;
  valorTotal: number = 0.00;
  edicao: boolean = true;
  hardware : Hardware;

  constructor(private router: Router,
    private hardwareService: HardwareFirebaseService,
    private formBuilder: FormBuilder,
  private alertController : AlertController) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation()
    this.hardware = nav.extras.state.Objeto;
    this.formCadastrar = this.formBuilder.group({
      tipo : [this.hardware.tipo, [Validators.required]], 
      marca:[this.hardware.marca, [Validators.required]],
      modelo:[this.hardware.modelo, [Validators.required]],
      preco:[this.hardware.preco, [Validators.required, Validators.pattern('^[0-9]*.[0-9]*')]],
      desconto:[this.hardware.desconto.toString(), [Validators.required]],
      quantidade:[this.hardware.quantidade, [Validators.required, Validators.pattern('^[0-9]*')]],
    });
    this.handleValorTotal()
  }

  get errorControl(){
    return this.formCadastrar.controls
  }

  async handleValorTotal(){
    console.log("PRECO" + this.formCadastrar.value.preco)
    const preco = parseFloat(this.formCadastrar.value.preco.replace(',','.'))
    const value = Math.round((this.formCadastrar.value.quantidade*preco*(1-this.formCadastrar.value.desconto/100)) * 100) / 100;
    if(isNaN(value)){
      this.valorTotal=0.00
    } else {
      this.valorTotal = value
    }
  }

  alterarEdicao(){
    if(this.edicao == true){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  editar(){
    this.hardwareService.editarHardware( 
      this.hardware,
      this.formCadastrar.value.tipo,
      this.formCadastrar.value.marca,
      this.formCadastrar.value.modelo,
      this.formCadastrar.value.preco,
      this.formCadastrar.value.desconto,
      this.formCadastrar.value.quantidade);
      this.router.navigateByUrl('/',{
        replaceUrl : true
      })
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
  excluir(){
    this.presentAlertConfirm("", "Excluir Hardware",
    "Você realmente deseja excluir o hardware?");
  }

  async presentAlertConfirm(header: string, subHeader: string,
    message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.excluirContato()
          },
        },
      ],
    });
    await alert.present();
  }
  
  private excluirContato(){
    if(this.hardwareService.excluir(this.hardware)){
      this.presentAlert("Agenda", "Excluir", "Exclusão Realizada");
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Agenda", "Excluir", "Contato Não Encontrado!");
    }
  }
}
