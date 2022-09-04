import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';

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
  isSubmitted : boolean = false;
  
  
  constructor(private router:Router, private alertController : AlertController, private contatoService : ContatoService,
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
      this.isSubmitted = true;
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
    if(this.contatoService.editar(this.contato, this.form_detalhar.value.nome, this.form_detalhar.value.telefone, this.form_detalhar.value.genero, this.form_detalhar.value.dataNascimento)){
      this.presentAlert('Agenda', 'Sucesso', 'Contato Alterado!')
      this.router.navigate(['/home'])
    } else {
      this.presentAlert('Agenda', 'Erro', 'Contato nâo encontrado!')
    }
    console.log(this.form_detalhar.value)
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
    this.presentAlertConfirm('Voce realmente deseja excluir o contato')

  }

  mudarAcaoBotao(value : boolean){
    this.acaoBotao=value
  }

  private excluirContato(){
    if(this.contatoService.excluir(this.contato)){
      this.presentAlert('Agenda', 'Sucesso', 'Contato Excluido!')
      this.router.navigate(['/home'])
    } else {
      this.presentAlert('Agenda', 'Sucesso', 'Contato nao encontrado!')
    }
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
}
