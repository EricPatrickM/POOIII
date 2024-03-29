import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Hardware } from '../models/hardware';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class HardwareFirebaseService {
  private PATH: string = 'hardware';

  constructor(private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage) { }

  getHardware(id: string) {
    return this.angularFirestore
      .collection(this.PATH)
      .doc(id)
      .valueChanges();
  }

  getHardwares() {
    return this.angularFirestore
      .collection(this.PATH)
      .snapshotChanges();
  }

  inserirHardware(hardware: Hardware) {
    return this.angularFirestore
      .collection(this.PATH)
      .add({
        tipo: hardware.tipo,
        marca: hardware.marca,
        modelo: hardware.modelo,
        preco: hardware.preco,
        quantidade: hardware.quantidade,
        desconto: hardware.desconto,
        dataLancamento: hardware.dataLancamento,
        downloadURL: hardware.downloadURL
      });
  }

  editarHardware(hardware: Hardware, downloadURL:any, id: string) {
    return this.angularFirestore
      .collection(this.PATH)
      .doc(id)
      .update({
        tipo: hardware.tipo,
        marca: hardware.marca,
        modelo: hardware.modelo,
        preco: hardware.preco,
        quantidade: hardware.quantidade,
        desconto: hardware.desconto,
        dataLancamento: hardware.dataLancamento,
        downloadURL : downloadURL,
      });
  }

  excluirHardware(hardware: Hardware) {
    let name = hardware.downloadURL.substring(hardware.downloadURL.indexOf('%2F')+3, hardware.downloadURL.indexOf('?'))
    this.angularFireStorage.ref('images')
    .child(name).delete()

    return this.angularFirestore
      .collection(this.PATH)
      .doc(hardware.id)
      .delete();
  }

    alterarImagem(hardware: Hardware, imagem:any, id: string) {
      const file = imagem.item(0);
      if (file.type.split('/')[0] !== 'image') {
        console.error('Tipo Não Suportado');
      return;
      }
      const path = `images/${new Date().getTime()}_${file.name}`;
      const fileRef = this.angularFireStorage.ref(path);
      let task = this.angularFireStorage.upload(path, file);
      task.snapshotChanges().pipe(
        finalize(() => {
          let uploadedFileURL = fileRef.getDownloadURL();
          uploadedFileURL.subscribe((resp) => {
            hardware.downloadURL = resp;
            this.editarHardware(hardware, hardware.downloadURL, id);
          })
        })
        ).subscribe();
        return task;
    }

  enviarImagem(imagem: any, hardware: Hardware) {
    const file = imagem.item(0);
    if (file.type.split('/')[0] !== 'image') {
      console.error('Tipo Não Suportado');
      return;
    }
    const path = `images/${new Date().getTime()}_${file.name}`;
    const fileRef = this.angularFireStorage.ref(path);
    let task = this.angularFireStorage.upload(path, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        let uploadedFileURL = fileRef.getDownloadURL();
        uploadedFileURL.subscribe((resp) => {
          hardware.downloadURL = resp;
          this.inserirHardware(hardware);
        })
      })
    ).subscribe();
    return task;
    }
  }

