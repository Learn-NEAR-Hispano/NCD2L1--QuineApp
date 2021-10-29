import { PersistentVector } from "near-sdk-as";

//Model Resultado
@nearBindgen
export class Resultado {

    id: i32;
    partido_id: i32;
    local: boolean;
    visitante: boolean;
    empate: boolean;

    constructor(id: i32, partido_id: i32, local: boolean, visitante: boolean, empate: boolean) {
        this.id = id;
        this.partido_id = partido_id;
        this.local = local;
        this.visitante = visitante;
        this.empate = empate;
    }
}

export const resultados = new PersistentVector<Resultado>("r");