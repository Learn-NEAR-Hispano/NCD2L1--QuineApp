import { PersistentVector } from "near-sdk-as";

//Model Partido
@nearBindgen
export class Partido {

    id: i32;
    jornada_id: i32;
    local_equipo_id: i32;
    visitante_equipo_id: i32;
    fecha: string;
    estadio: string;
    status: string;

    constructor(id: i32, jornada_id: i32, local_equipo_id: i32, visitante_equipo_id: i32, fecha: string, estadio: string) {
        this.id = id;
        this.jornada_id = jornada_id;
        this.local_equipo_id = local_equipo_id;
        this.visitante_equipo_id = visitante_equipo_id;
        this.fecha = fecha;
        this.estadio = estadio;
        this.status = "Sin Iniciar";
    }
}

export const partidos = new PersistentVector<Partido>("p");