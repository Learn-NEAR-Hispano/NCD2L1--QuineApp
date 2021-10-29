import { PersistentVector } from "near-sdk-as";

//Model Cobros
@nearBindgen
export class Cobro {

    id: i32;
    participante_id: i32;
    usuario_id: i32; //near
    quiniela_id: i32;
    monto: f32;
    is_pago: boolean; // ver si es un pago por ganar o si es un conbro

    constructor(id: i32, participante_id: i32, quiniela_id: i32, monto: f32, is_pago: boolean) {
        this.id = id;
        this.participante_id = participante_id;
        this.quiniela_id = quiniela_id;
        this.monto = monto;
        this.is_pago = is_pago;
    }
}

export const cobros = new PersistentVector<Cobro>("c");