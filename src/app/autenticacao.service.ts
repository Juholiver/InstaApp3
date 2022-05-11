import { Usuario } from "./acesso/usuario.model";
import firebase from 'firebase/compat/app'
import '@firebase/auth'


export class Autenticacao {
    public cadastraUsuario (usuario: Usuario): void {
        console.log ('chegamos ate o serviço: ', usuario)

        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any)=> {
                console.log(resposta)
            })
            .catch((error: Error)=> {
                console.log(error)
            })
    }
}