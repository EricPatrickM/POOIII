import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/models/contato';
import { ContatoFirebaseService } from 'src/app/services/contato-firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})

export class DetalharPage implements OnInit {
  contato : Contato
  data:string
  
  acaoBotao:boolean=false;
  form_detalhar : FormGroup;
  
  
  constructor(private router:Router, 
    private alertController : AlertController,
    private contatoFS : ContatoFirebaseService,
    private formBuilder:FormBuilder) { }
    
    ngOnInit() {
      const nav = this.router.getCurrentNavigation();
      this.contato = nav.extras.state.Objeto;
  
      this.data=new Date().toISOString()

      this.form_detalhar = this.formBuilder.group({
        nome : [this.contato.nome, [Validators.required, Validators.minLength(1)]], 
        telefone:[this.contato.telefone, [Validators.required, Validators.minLength(10)]], 
        genero:[this.contato.genero, [Validators.required]],
        dataNascimento:[this.contato.dataNascimento, [Validators.required]],
      });
    }

    get errorControl(){
      return this.form_detalhar.controls
    }

    submitForm():boolean{
      if(!this.form_detalhar.valid){
        this.presentAlert("Agenda", "Erro", "Todos os campos sao obrigatorios");
        return false
      } else {
        if(this.acaoBotao/*==true*/){
          this.editar()
        } else{
          this.excluir()
        }
      }
    }

  editar(){
    this.contatoFS.editarContato(this.form_detalhar.value, this.contato.id)
    .then(()=>{    
      this.presentAlert('Agenda', 'Sucesso', 'Contato Alterado!')
      this.router.navigate(['/home'])
    })
    .catch((error)=>{
      this.presentAlert('Agenda', 'Falha', 'Erro no banco de dados!')
      console.log(error)
    })
  }

  
  excluir(){
    this.presentAlertConfirm('Voce realmente deseja excluir o contato')
  }

  mudarAcaoBotao(value : boolean){
    this.acaoBotao=value
  }

  private excluirContato(){
    this.contatoFS.excluirContato(this.contato)
    .then(()=>{    
      this.presentAlert('Agenda', 'Sucesso', 'Contato Excluido!')
      this.router.navigate(['/home'])
    })
    .catch((error)=>{
      this.presentAlert('Agenda', 'Falha', 'Erro no banco de dados!')
      console.log(error)
    })
  }

  async presentAlertConfirm(value : string) {
    const alert = await this.alertController.create({
      header: value,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
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
