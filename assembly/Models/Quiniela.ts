import { PersistentVector } from "near-sdk-as";

//Model Quiniela
@nearBindgen
export class Quiniela {

    id: i32;
    usuario_id: i32; //Creador de la Quiniela
    jornada_id: i32;
    finalizada: boolean;
    costo: f32;
    fecha_cierre: string;
    cerrada: boolean;
    premio: f32;
    ganador_id: i32;

    constructor(id: i32, usuario_id: i32, jornada_id: i32, costo: f32, fecha_cierre: string) {
        this.id = id;
        this.usuario_id = usuario_id;
        this.jornada_id = jornada_id;
        this.finalizada = false;
        this.costo = costo;
        this.fecha_cierre = fecha_cierre;
        this.cerrada = false;
        this.premio = 0;
    }
}

export const quinielas = new PersistentVector<Quiniela>("q");