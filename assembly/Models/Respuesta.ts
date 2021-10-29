import { PersistentVector } from "near-sdk-as";

//Model Respuesta
@nearBindgen
export class Respuesta {

    id: i32;
    partido_id: i32;
    participante_id: i32;
    quiniela_id: i32;
    jornada_id: i32;
    local: boolean;
    visitante: boolean;
    empate: boolean;

    constructor(id: i32, partido_id: i32, participante_id: i32, quiniela_id: i32, jornada_id: i32, local:boolean, visitante:boolean, empate:boolean) {
        this.id = id;
        this.partido_id = partido_id;
        this.participante_id = participante_id;
        this.quiniela_id = quiniela_id;
        this.jornada_id = jornada_id;
        this.local = local;
        this.visitante = visitante;
        this.empate = empate;
    }
}

export const respuestas = new PersistentVector<Respuesta>("re");