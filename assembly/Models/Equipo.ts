import { PersistentVector } from "near-sdk-as";

//Model Equipo
@nearBindgen
export class Equipo {

    id: i32;
    nombre: string;
    liga: string;
    escudo: string;
    pais: string;

    constructor(id: i32, nombre: string, liga: string, escudo: string, pais: string) {
        this.id = id;
        this.nombre = nombre;
        this.liga = liga;
        this.escudo = escudo;
        this.pais = pais;
    }
}

export const equipos = new PersistentVector<Equipo>("e");