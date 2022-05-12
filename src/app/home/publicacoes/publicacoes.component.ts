import { Component, OnInit } from '@angular/core';
import { Bd } from 'src/app/bd.service';
import firebase from 'firebase/compat'

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  public email: string | any

  constructor( private bd: Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged ((user : any) => {
      this.email = user.email;
 
      this.atualizarTimeLine();
    })
  }

  public atualizarTimeLine(): void {
    this.bd.consultaPublicacoes(this.email)
  }

}
