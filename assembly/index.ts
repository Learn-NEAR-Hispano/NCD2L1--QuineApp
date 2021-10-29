import { Context } from "near-sdk-as";
//import { logging } from 'near-sdk-as'
//import { parse } from 'uuid';
import { Cobro, cobros } from './Models/Cobro';
import { Equipo, equipos } from './Models/Equipo';
import { Jornada, jornadas } from './Models/Jornada';
import { Participante, participantes } from './Models/Participante';
import { Partido, partidos } from './Models/Partido';
import { Quiniela, quinielas } from './Models/Quiniela';
import { Respuesta, respuestas } from './Models/Respuesta';
import { Resultado, resultados } from './Models/Resultado';

export function hello(): string {
  let user = Context.sender
  return "Hola " + user;
}

/* -------------------------Equipos de Football---------------------------------------------*/
export function setEquipo(nombre: string, liga: string, escudo: string, pais: string): string {
  assert(nombre.length > 0, "Nombre es requerido");
  assert(liga.length > 0, "Liga es requerida");
  assert(escudo.length > 0, "URL de imagen de escudo es requerida");
  assert(pais.length > 0, "País es requerido");
  let e = new Equipo(equipos.length, nombre, liga, escudo, pais);
  equipos.push(e);
  return 'Equipo creado correctamente.'
}

export function getEquipos(): Array<Equipo> {
  const listado: Equipo[] = new Array<Equipo>(equipos.length);
  for (let i = 0; i < equipos.length; i++) {
    listado[i] = equipos[i];
  }
  return listado;
}

export function getEquipo(id: i32): Equipo | null {
  if (!equipos.containsIndex(id)) {
    throw new Error("Equipo no encontrado!");
  }
  return equipos[id];
}

export function deleteEquipo(id: i32): string {
  if (!equipos[id]) return "Este Equipo no existe";
  equipos.swap_remove(id);
  return 'Equipo Eliminado';
}

export function searchEquipoPais(pais: string): Equipo | null {
  for (let i = 0; i < equipos.length; i++) {
    if (equipos[i].pais == pais) {
      let find = equipos[i];
      return find;
    }
  }
  return null;
}



/* -------------------------Jornadas---------------------------------------------*/
export function setJornada(descripcion: string, fecha_inicio: string, fecha_final: string): string {
  assert(descripcion.length > 0, "Descripción de la Jornada es requerido");
  assert(fecha_inicio.length > 0, "Fecha de inicio de la Jornada es requerida");
  assert(fecha_final.length > 0, "Fecha de Fin de la Jornada es requerida");
  let e = new Jornada(jornadas.length, descripcion, fecha_inicio, fecha_final);
  jornadas.push(e);
  return 'Jornada creada correctamente.'
}

export function getJornadas(): Array<Jornada> {
  const listado: Jornada[] = new Array<Jornada>(jornadas.length);
  for (let i = 0; i < jornadas.length; i++) {
    listado[i] = jornadas[i];
  }
  return listado;
}

export function getJornada(id: i32): Jornada | null {
  if (!jornadas.containsIndex(id)) {
    throw new Error("Jornada no encontrado!");
  }
  return jornadas[id];
}

export function getJornadasIniciadas(): Jornada | null {
  for (let i = 0; i < jornadas.length; i++) {
    if (jornadas[i].status == 'Iniciada') {
      let find = jornadas[i];
      return find;
    }
  }
  return null;
}

export function deleteJornada(id: i32): string {
  if (!jornadas[id]) return "Esta Jornada no existe";
  equipos.swap_remove(id);
  return 'Jornada Eliminada';
}

export function setStatusJornada(id: i32, status: string): Jornada {
  if (!jornadas.containsIndex(id)) {
    throw new Error("Esta Jornada no existe");
  }
  let jornada = jornadas[id];
  jornada.status = status;
  jornadas.replace(id, jornada);
  return jornada;
}


/* -------------------------Partidos---------------------------------------------*/
export function setPartido(jornada_id: i32, local_equipo_id: i32, visitante_equipo_id: i32, fecha: string, estadio: string): string {
  assert(jornada_id >= 0, "jornada_id es requerido");
  assert(local_equipo_id >= 0, "local_equipo_id es requerido");
  assert(visitante_equipo_id >= 0, "visitante_equipo_id es requerido");
  assert(fecha.length >= 0, "Fecha es requerida");
  assert(estadio.length >= 0, "Nombre de Estadio es requerido");
  let e = new Partido(partidos.length, jornada_id, local_equipo_id, visitante_equipo_id, fecha, estadio);
  partidos.push(e);
  return 'Partido creado correctamente.'
}

export function getPartidos(): Array<Partido> {
  const listado: Partido[] = new Array<Partido>(partidos.length);
  for (let i = 0; i < partidos.length; i++) {
    listado[i] = partidos[i];
  }
  return listado;
}

export function getPartido(id: i32): Partido | null {
  if (!partidos.containsIndex(id)) {
    throw new Error("Partido no encontrado!");
  }
  return partidos[id];
}

export function getPartidosForStatus(status: string): Partido | null {
  for (let i = 0; i < partidos.length; i++) {
    if (partidos[i].status == status) {
      let find = partidos[i];
      return find;
    }
  }
  return null;
}

export function setStatusPartido(id: i32, status: string): Partido {
  if (!partidos.containsIndex(id)) {
    throw new Error("Este Partido no existe");
  }
  let partido = partidos[id];
  partido.status = status;
  partidos.replace(id, partido);
  return partido;
}

export function deletePartido(id: i32): string {
  if (!partidos[id]) return "Este Partido no existe";
  partidos.swap_remove(id);
  return 'Partido Eliminado';
}


/* -------------------------Resultados---------------------------------------------*/
export function setResultado(partido_id: i32, local: boolean, visitante: boolean, empate: boolean): string {
  assert(partido_id >= 0, "partido_id es requerido");
  let e = new Resultado(partidos.length, partido_id, local, visitante, empate);
  resultados.push(e);
  return 'Resultado creado correctamente.'
}

export function getResultados(): Array<Resultado> {
  const listado: Resultado[] = new Array<Resultado>(resultados.length);
  for (let i = 0; i < resultados.length; i++) {
    listado[i] = resultados[i];
  }
  return listado;
}

export function getGanadorPartido(partido_id: i32): string {
  if (resultados[partido_id].local && !resultados[partido_id].visitante && !resultados[partido_id].empate) {
    return "Ganador Equipo Local";
  } else if (!resultados[partido_id].local && resultados[partido_id].visitante && !resultados[partido_id].empate) {
    return "Ganador Equipo Visitante";
  } else if (!resultados[partido_id].local && !resultados[partido_id].visitante && resultados[partido_id].empate) {
    return "Partido Empatado";
  } else {
    return "Error de resultados";
  }
}

export function deleteResultado(id: i32): string {
  if (!resultados[id]) return "Este Resultado no existe";
  resultados.swap_remove(id);
  return 'Resultados Eliminado';
}


/* -------------------------Quinielas---------------------------------------------*/
export function setQuiniela(usuario_id: i32, jornada_id: i32, costo: f32, fecha_cierre: string): string {
  assert(usuario_id >= 0, "usuario_id es requerido");
  assert(jornada_id >= 0, "usuario_id es requerido");
  assert(costo > 0, "El costo debe ser mayor a 0 NEAR");
  assert(fecha_cierre.length > 0, "Fecha de cierre requerida");
  let e = new Quiniela(quinielas.length, usuario_id, jornada_id, costo, fecha_cierre);
  quinielas.push(e);
  return 'Quiniela creada correctamente.'
}

export function getQuinielas(): Array<Quiniela> {
  const listado: Quiniela[] = new Array<Quiniela>(partidos.length);
  for (let i = 0; i < quinielas.length; i++) {
    listado[i] = quinielas[i];
  }
  return listado;
}

export function getQuiniela(id: i32): Quiniela | null {
  if (!quinielas.containsIndex(id)) {
    throw new Error("Quiniela no encontrado!");
  }
  return quinielas[id];
}

export function getQuinielasAbiertas(): Quiniela | null {
  for (let i = 0; i < partidos.length; i++) {
    if (!quinielas[i].cerrada) {
      let find = quinielas[i];
      return find;
    }
  }
  return null;
}

export function cerrarQuiniela(id: i32): Quiniela | null {
  if (!quinielas.containsIndex(id)) {
    throw new Error("Quiniela no existe");
  }
  let quiniela = quinielas[id];
  quiniela.cerrada = true;
  let total: f32 = 0;
  for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].quiniela_id == id) {
      total++;
    }
  }
  quiniela.premio = total * quiniela.costo;
  quinielas.replace(id, quiniela);
  return quiniela;
}

export function deleteQuiniela(id: i32): string {
  if (!quinielas[id]) return "Esta Quiniela no existe";
  quinielas.swap_remove(id);
  return 'Quiniela Eliminada';
}



/* -------------------------Participantes---------------------------------------------*/
export function setParticipante(usuario_id: i32, quiniela_id: i32): string {
  assert(usuario_id >= 0, "usuario_id es requerido");
  assert(quiniela_id >= 0, "usuario_id es requerido");
  let e = new Participante(participantes.length, usuario_id, quiniela_id);
  participantes.push(e);
  return 'Participante creado correctamente.'
}

export function getParticipantes(): Array<Participante> {
  const listado: Participante[] = new Array<Participante>(partidos.length);
  for (let i = 0; i < participantes.length; i++) {
    listado[i] = participantes[i];
  }
  return listado;
}

export function getQuinielasForParticipante(usuario_id: i32): Quiniela | null {
  for (let i = 0; i < quinielas.length; i++) {
    if (quinielas[i].usuario_id == usuario_id) {
      let find = quinielas[i];
      return find;
    }
  }
  return null;
}

export function deleteParticipante(id: i32): string {
  if (!participantes[id]) return "Este Participante no existe";
  participantes.swap_remove(id);
  return 'Participante Eliminado';
}


/* -------------------------Cobros---------------------------------------------*/
export function setCobro(participante_id: i32, quiniela_id: i32, monto: f32, is_pago: boolean): string {
  assert(participante_id >= 0, "usuario_id es requerido");
  assert(quiniela_id >= 0, "usuario_id es requerido");
  assert(monto > 0, "usuario_id es requerido");
  let e = new Cobro(cobros.length, participante_id, quiniela_id, monto, is_pago);
  cobros.push(e);
  return 'Participante creado correctamente.'
}

export function getCobroForUsuario(usuario_id: i32): Cobro | null {
  for (let i = 0; i < cobros.length; i++) {
    if (cobros[i].usuario_id == usuario_id && !cobros[i].is_pago) {
      let find = cobros[i];
      return find;
    }
  }
  return null;
}

export function getGaneForUsuario(usuario_id: i32): Cobro | null {
  for (let i = 0; i < cobros.length; i++) {
    if (cobros[i].usuario_id == usuario_id && cobros[i].is_pago) {
      let find = cobros[i];
      return find;
    }
  }
  return null;
}

export function getTransacciones(usuario_id: i32): Cobro | null {
  for (let i = 0; i < cobros.length; i++) {
    if (cobros[i].usuario_id == usuario_id) {
      let find = cobros[i];
      return find;
    }
  }
  return null;
}
