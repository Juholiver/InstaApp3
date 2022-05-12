import firebase from 'firebase/compat/app'
//import "firebase/compat/auth"
//import "firebase/compat/firestore"
import '@firebase/app'
import '@firebase/auth'

export class Bd {
    public publicar(publicacao: any): void {

        let nomeImagem = Date.now()

        firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
/*
        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push( { titulo:publicacao.titulo})*/
        //console.log('chegamos ate o servico responsavel')
    }
}