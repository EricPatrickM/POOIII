import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ContatoFirebaseService } from 'src/app/services/contato-firebase.service';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})

export class CadastrarPage implements OnInit {
  data : string;
  form_cadastrar : FormGroup;
  isSubmitted : boolean = false;

  constructor(private alertController : AlertController,
     private router: Router, 
    private contatoService : ContatoService,
     private formBuilder:FormBuilder,
     private contatoFS:ContatoFirebaseService,
     private loadingCtrl: LoadingController) { }
  
  ngOnInit() {
    this.data=new Date().toISOString()
    this.form_cadastrar = this.formBuilder.group({
      nome : ["", [Validators.required]], 
      telefone:["", [Validators.required, Validators.minLength(10)]], 
      genero:["", [Validators.required]],
      dataNascimento:["", [Validators.required]],
    });
  }

  get errorControl(){
    return this.form_cadastrar.controls
  }

  submitForm():boolean{
    this.isSubmitted = true;
    if(!this.form_cadastrar.valid){
      this.presentAlert("Agenda", "Erro", "Todos os campos sao obrigatorios");
      return false
    } else {
      this.cadastrar()
    }
  }

  private cadastrar(){
    this.showLoading('aguarde', 10000)
    this.contatoFS.inserirContato(this.form_cadastrar.value)
    .then(()=>{    
      this.loadingCtrl.dismiss();
      this.presentAlert('Agenda', 'Sucesso', 'Dados validos!')
    this.router.navigate(['/home'])
    })
    .catch((error)=>{
      this.loadingCtrl.dismiss();
      this.presentAlert('Agenda', 'Falha', 'Erro no banco de dados!')
      console.log(error)
    })
  }

  async showLoading(mensagem:string, duracao:number) {
    const loading = await this.loadingCtrl.create({
      message: mensagem,
      duration: duracao,
    });

    loading.present();
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
}
