import { Injectable } from '@angular/core'
import firebase from 'firebase/compat/app'
//import "firebase/compat/auth"
//import "firebase/compat/firestore"
import '@firebase/app'
import '@firebase/auth'
import { Progresso } from './progresso.service'

@Injectable()

export class Bd {
    constructor(private progresso: Progresso) { }
    public publicar(publicacao: any): void {

        let nomeImagem = Date.now()

        firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                //acompanhamento
                (snapshot: any) => {
                    this.progresso.status = 'andamento'
                    this.progresso.estado = snapshot
                    //console.log(snapshot)
                },
                (error) => {
                    this.progresso.status = 'erro'
                    //console.log(error)
                },
                ()=> {
                    //finalização do processo
                    this.progresso.status = 'concluido'
                    //console.log('upload completo')
                }
                
            )
/*
        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push( { titulo:publicacao.titulo})*/
        //console.log('chegamos ate o servico responsavel')
    }
}