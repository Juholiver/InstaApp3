import { Usuario } from "./acesso/usuario.model";
import firebase from 'firebase/compat/app'
import '@firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '@firebase/app'


export class Autenticacao {
    public cadastraUsuario (usuario: Usuario): void {
        console.log ('chegamos ate o serviço: ', usuario)

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any)=> {
              
                delete usuario.senha
                
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set( usuario )
                
            })
            .catch((error: Error)=> {
                console.log(error)
            })
    }
}