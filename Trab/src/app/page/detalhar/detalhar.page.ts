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
  valorTotal: number = 0.00;
  edicao: boolean = true;
  hardware : Hardware;
  data: string;
  image : any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private hardwareFS : HardwareFirebaseService,
  private alertController : AlertController) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation()
    this.hardware = nav.extras.state.Objeto;
    this.data = new Date().toISOString();
    this.formCadastrar = this.formBuilder.group({
      tipo : [this.hardware.tipo, [Validators.required]], 
      marca:[this.hardware.marca, [Validators.required]],
      modelo:[this.hardware.modelo, [Validators.required]],
      preco:[this.hardware.preco, [Validators.required, Validators.pattern('^[0-9]*.[0-9]*')]],
      desconto:[this.hardware.desconto.toString(), [Validators.required]],
      quantidade:[this.hardware.quantidade, [Validators.required, Validators.pattern('^[0-9]*')]],
      dataLancamento : [this.hardware.dataLancamento, [Validators.required]],
      image : ['', [Validators.required]]
    });
    this.handleValorTotal();
  }

  get errorControl(){
    return this.formCadastrar.controls
  }

  uploadFile(image : any){
    this.image = image.files;
  }
  async handleValorTotal(){
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
      if(this.formCadastrar.value.image != ''){
        this.hardwareFS.alterarImagem(this.formCadastrar.value, this.image, this.hardware.id).then
        (()=>{
          this.presentAlert('Hardware', 'Sucesso', 'Contato Alterado!')
        this.router.navigate(['/home'])
      })
      .catch((error) => {
        this.presentAlert('Hardware', 'Falha', 'Erro no banco')
        console.log(error)
      })
      } else {
        this.hardwareFS.editarHardware(this.formCadastrar.value, this.hardware.downloadURL, this.hardware.id).then
        (()=>{
          this.presentAlert('Hardware', 'Sucesso', 'Contato Alterado!')
        this.router.navigate(['/home'])
        })
        .catch((error) => {
        this.presentAlert('Hardware', 'Falha', 'Erro no banco')
        console.log(error)
        })
    }
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
    this.presentAlertConfirm('Alerta', 'Excluir', 'Você realmente deseja excluir?')
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
            this.excluirHardware();
          },
        },
      ],
    });
    await alert.present();
  }
  
  private excluirHardware(){
    if(this.hardwareFS.excluirHardware(this.hardware)){
      this.presentAlert("Excluir", "", "Exclusão Realizada");
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Excluir", "", "Contato Não Encontrado!");
    }
  }
}
