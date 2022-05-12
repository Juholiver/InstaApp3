import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import firebase from 'firebase/compat';
//import "firebase/compat/auth"
//import "firebase/compat/firestore"
import '@firebase/app'
import '@firebase/auth'

import { Bd } from 'src/app/bd.service';
import { Progresso } from 'src/app/progresso.service';

import { Observable, interval, Subject } from 'rxjs';
import { takeUntil } from'rxjs/operators'


@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string |undefined
  private imagem: any 

  public progressoPublicacao: string = 'pendente'
  public porcentagemUpload: number | undefined
  
  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
    private bd: Bd,
    private progresso: Progresso
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((email)=> {
      this.email = this.email
    })
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    })

    let acompanhamentoUpload =  interval(1500);

    let continua = new Subject<any>();

    continua.next(true)

    acompanhamentoUpload.pipe(
    takeUntil(continua)
    ).subscribe(() => {
      //console.log(this.progresso.status)
      //console.log(this.progresso.estado)
      this.progressoPublicacao = ' andamento'

      this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100)

      if(this.progresso.status === 'concluido') {
        this.progressoPublicacao = 'concluido'
        continua.next(false);
      }
    })


  }

  public preparaImagemUpload(event: Event): void {
   this.imagem = (<HTMLInputElement>event.target).files
  }

}
