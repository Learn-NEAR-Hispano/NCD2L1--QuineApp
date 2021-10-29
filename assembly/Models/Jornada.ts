import { PersistentVector } from "near-sdk-as";

//Model Jornada
@nearBindgen
export class Jornada {

    id: i32;
    descripcion: string;
    fecha_inicio: string;
    fecha_final: string;
    status : string;

    constructor(id: i32, descripcion: string, fecha_inicio: string, fecha_final: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.status = 'Sin Iniciar';
    }
}

export const jornadas = new PersistentVector<Jornada>("j");