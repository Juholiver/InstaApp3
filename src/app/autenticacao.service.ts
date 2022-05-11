import { Usuario } from "./acesso/usuario.model";

export class Autenticacao {
    public cadastraUsuario (usuario: Usuario): void {
        console.log ('chegamos ate o serviço: ', usuario)
    }
}