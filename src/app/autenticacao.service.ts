import { Usuario } from "./acesso/usuario.model";
import firebase from 'firebase/compat/app'
import '@firebase/auth'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '@firebase/app'


export class Autenticacao {

    public token_id: string | undefined

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
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser?.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken
                        console.log(this.token_id)
                    })
            })
            .catch((error: Error) => console.log(error))
    }
}