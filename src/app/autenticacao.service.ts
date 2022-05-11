import { Usuario } from "./acesso/usuario.model";
import firebase from 'firebase/compat/app'
import '@firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '@firebase/app'


export class Autenticacao {
    public cadastraUsuario (usuario: Usuario): Promise<any> {
        //console.log ('chegamos ate o serviço: ', usuario)

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any)=> {
              
                //delete usuario.senha
                
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set( usuario )
                
            })
            .catch((error: Error)=> {
                console.log(error)
            })
    }

    public autenticar(email: string, senha: string): void {
        console.log('email:', email)
        console.log('senha:', senha)
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => console.log(resposta))
            .catch((error: Error) => console.log(error))
    }
}