import { PersistentVector } from "near-sdk-as";

//Model Participante
@nearBindgen
export class Participante {

    id: i32;
    usuario_id: i32; //Near
    quiniela_id: i32;

    constructor(id: i32, usuario_id: i32, quiniela_id: i32) {
        this.id = id;
        this.usuario_id = usuario_id;
        this.quiniela_id = quiniela_id;
    }
}

export const participantes = new PersistentVector<Participante>("pa");