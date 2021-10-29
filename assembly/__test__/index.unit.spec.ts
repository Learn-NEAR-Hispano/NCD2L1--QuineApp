import * as contract from "..";
//import { Context } from "near-sdk-as";

// ------------------------- Equipos de Football ------------------------- //

// Prueba para la función setEquipo
describe("Set Equipo de FootBall",()=>{
  it("Debería Registrar un Equipo de FootBall", () => {
    expect(() => {
      contract.setEquipo("Altas", "MX", "https://gogle.com/altas", "México");
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos el Nombre del Equipo", () => {
    expect(() => {
      contract.setEquipo("", "MX", "https://gogle.com/altas", "México");
    }).toThrow();
  });
  it("Debería fallar si no enviamos la Liguilla", () => {
    expect(() => {
      contract.setEquipo("Altas", "", "https://gogle.com/altas", "México");
    }).toThrow();
  });
});

// Prueba para la función consultar Equipos
describe("Consultar todos los Equipos",()=>{
  it("Debería consultar todos los Equipos", () => {
    expect(() => {
      contract.getEquipos();
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Equipo por ID
describe("Buscar Equipo por ID",()=>{
  it("Debería buscar un Equipo por ID", () => {
    expect(() => {
      contract.getEquipo(0);
    }).not.toThrow();
  });
});

// Prueba para la función Eliminar Equipo por ID
describe("Buscar Equipo por País",()=>{
  it("Debería Buscar Equipo por País", () => {
    expect(() => {
      contract.searchEquipoPais('México');
    }).not.toThrow();
  });
});

// Prueba para la función Eliminar Equipo por ID
describe("Eliminar Equipo por ID",()=>{
  it("Debería Eliminar un Equipo por ID", () => {
    expect(() => {
      contract.deleteEquipo(0);
    }).not.toThrow();
  });
});




// ------------------------- Jornadas ------------------------- //

// Prueba para la función setJornada
describe("Set Jornada",()=>{
  it("Debería Registrar una Jornada", () => {
    expect(() => {
      contract.setJornada("Jornada 1", "2022-01-10", "2022-03-10");
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos el Nombre de la Jornada", () => {
    expect(() => {
      contract.setJornada("", "2022-01-10", "2022-03-10");
    }).toThrow();
  });
  it("Debería fallar si no enviamos la fecha de Inicio de la Jornada", () => {
    expect(() => {
      contract.setJornada("Jornada 1", "", "2022-03-10");
    }).toThrow();
  });
  it("Debería fallar si no enviamos la fecha Final de la Jornada", () => {
    expect(() => {
      contract.setJornada("Jornada 1", "2022-01-10", "");
    }).toThrow();
  });
});

// Prueba para la función consultar Jornadas
describe("Consultar todas las Jornadas",()=>{
  it("Debería consultar todas las Jornadas", () => {
    expect(() => {
      contract.getJornadas();
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Jornada por ID
describe("Buscar Jornada por ID",()=>{
  it("Debería buscar una Jornada por ID", () => {
    expect(() => {
      contract.getJornada(0);
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Jornadas Iniciadas
describe("Buscar Jornadas Iniciadas",()=>{
  it("Debería buscar Jornadas Iniciadas", () => {
    expect(() => {
      contract.getJornadasIniciadas();
    }).not.toThrow();
  });
});

// Prueba para la función SetStatus de Jornada por ID
describe("SetStatus de Jornada por ID",()=>{
  it("Debería Cambiar el Status de Jornada", () => {
    expect(() => {
      contract.setStatusJornada(0, 'Finalizada');
    }).not.toThrow();
  });
});

// Prueba para la función Eliminar Jornada por ID
describe("Eliminar Jornada por ID",()=>{
  it("Debería Eliminar Jornada", () => {
    expect(() => {
      contract.deleteJornada(0);
    }).not.toThrow();
  });
});


// ------------------------- Partidos ------------------------- //

// Prueba para la función SetPartido
describe("Set Partido",()=>{
  it("Debería Registrar un Partido", () => {
    expect(() => {
      contract.setPartido(1, 1, 2, "2021-11-15", "Necaxa");
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos jornada_id positivo", () => {
    expect(() => {
      contract.setPartido(-1, 1, 2, "2021-11-15", "Necaxa");
    }).toThrow();
  });
  it("Debería fallar si no enviamos local_equipo_id positivo", () => {
    expect(() => {
      contract.setPartido(1, -1, 2, "2021-11-15", "Necaxa");
    }).toThrow();
  });
  it("Debería fallar si no enviamos visitante_equipo_id positivo", () => {
    expect(() => {
      contract.setPartido(1, 1, -2, "2021-11-15", "Necaxa");
    }).toThrow();
  });
});

// Prueba para la función consultar Partidos
describe("Consultar todos los Partidos",()=>{
  it("Debería consultar todos los Permisos", () => {
    expect(() => {
      contract.getPartidos();
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Partido por ID
describe("Buscar Partido por ID",()=>{
  it("Debería buscar un Partido por ID", () => {
    expect(() => {
      contract.getPartido(0);
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Partidos por Status
describe("Buscar Partidos por Status",()=>{
  it("Debería buscar un Partidos por Status", () => {
    expect(() => {
      contract.getPartidosForStatus("Sin Iniciar");
    }).not.toThrow();
  });
});

// Prueba para la función setStatusPartido
describe("Set Status de Partido",()=>{
  it("Debería asignar un Status a un Partido", () => {
    expect(() => {
      contract.setStatusPartido(0, "Fiinalizado");
    }).not.toThrow();
  });
});

// Prueba para la función Eliminar partido por ID
describe("Eliminar Partido por ID",()=>{
  it("Debería Eliminar Partido", () => {
    expect(() => {
      contract.deletePartido(0);
    }).not.toThrow();
  });
});



// ------------------------- Quinielas ------------------------- //

// Prueba para la función SetQuiniela
describe("Set Quiniela",()=>{
  it("Debería Registrar una Quiniela", () => {
    expect(() => {
      contract.setQuiniela(1, 1, 10.5, "2021-12-10");
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos usaurio_id positivo", () => {
    expect(() => {
      contract.setQuiniela(-1, 1, 10.5, "2021-12-10");
    }).toThrow();
  });
  it("Debería fallar si no enviamos jornada_id positivo", () => {
    expect(() => {
      contract.setQuiniela(1, -1, 10.5, "2021-12-10");
    }).toThrow();
  });
  it("Debería fallar si no enviamos Fecha de cierre de Quiniela", () => {
    expect(() => {
      contract.setQuiniela(1, 1, 10.5, "");
    }).toThrow();
  });
});

// Prueba para la función consultar Partidos
describe("Consultar todos las Quinielas",()=>{
  it("Debería consultar todas las Quinielas", () => {
    expect(() => {
      contract.getQuinielas();
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Quiniela por ID
describe("Buscar Quiniela por ID",()=>{
  it("Debería buscar una Quiniela por ID", () => {
    expect(() => {
      contract.getQuiniela(0);
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Quinielas Abiertas
describe("Buscar Quinielas Abiertas",()=>{
  it("Debería buscar Quinielas Abiertas", () => {
    expect(() => {
      contract.getQuinielasAbiertas();
    }).not.toThrow();
  });
});

// Prueba para la función Buscar Quiniela por ID
describe("Cerrar Quiniela por ID",()=>{
  it("Debería cerrar Quiniela por ID", () => {
    expect(() => {
      contract.cerrarQuiniela(0);
    }).not.toThrow();
  });
});

// Prueba para la función Eliminar Quiniela por ID
describe("Eliminar Quiniela por ID",()=>{
  it("Debería Eliminar Quiniela por ID", () => {
    expect(() => {
      contract.deleteQuiniela(0);
    }).not.toThrow();
  });
});



// ------------------------- Participantes ------------------------- //

// Prueba para la función setParticipante
describe("Set Participante",()=>{
  it("Debería Registrar un Participante", () => {
    expect(() => {
      contract.setParticipante(1, 1);
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos usaurio_id positivo", () => {
    expect(() => {
      contract.setParticipante(-1, 1);
    }).toThrow();
  });
  it("Debería fallar si no enviamos jornada_id positivo", () => {
    expect(() => {
      contract.setParticipante(1, -1);
    }).toThrow();
  });
});

// Prueba para la función consultar Participantes
describe("Consultar todos los Participantes",()=>{
  it("Debería consultar todas los Participantes", () => {
    expect(() => {
      contract.getParticipantes();
    }).not.toThrow();
  });
});

// Prueba para la función consultar Todas las Quinielas por Participante
describe("Consultar todas las Quinielas Por Participantes",()=>{
  it("Debería consultar todas las Quinielas Por Participantes", () => {
    expect(() => {
      contract.getQuinielasForParticipante(1);
    }).not.toThrow();
  });
});

// Prueba para la función Eliminar Participante por ID
describe("Eliminar Participante Por ID",()=>{
  it("Debería Eliminar Participante Por ID", () => {
    expect(() => {
      contract.deleteParticipante(0);
    }).not.toThrow();
  });
});


// ------------------------- Cobros/Pagos ------------------------- //


// Prueba para la función setCobro
describe("Set Participante",()=>{
  it("Debería Registrar un Participante", () => {
    expect(() => {
      contract.setCobro(1, 1, 10.0, false);
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos participante_id positivo", () => {
    expect(() => {
      contract.setCobro(-1, 1, 10.0, false);
    }).toThrow();
  });
  it("Debería fallar si no enviamos quiniela_id positivo", () => {
    expect(() => {
      contract.setCobro(1, -1, 10.0, false);
    }).toThrow();
  });
  it("Debería fallar si el monto no es mayor a cero", () => {
    expect(() => {
      contract.setCobro(1, 1, 0, false);
    }).toThrow();
  });
});

// Prueba para la función consultar Cobros/Pagos por Usuario
describe("Consultar todos los Cobros/Pagos por Usuario",()=>{
  it("Debería consultar todas los Cobros/Pagos por Usuario", () => {
    expect(() => {
      contract.getCobroForUsuario(1);
    }).not.toThrow();
  });
});

// Prueba para la función consultar Cobros/Pagos por Usuario
describe("Consultar todos los Pagos por Ganar una Quiniela por  Usuario",()=>{
  it("Debería consultar todas los Pagos Por Ganar Quiniela por Usuario", () => {
    expect(() => {
      contract.getGaneForUsuario(1);
    }).not.toThrow();
  });
});

// Prueba para la función consultar Todas las Transacciónes por Usuario
describe("Consultar todos las Transacciones por  Usuario",()=>{
  it("Debería consultar todas las Transacciones por Usuario", () => {
    expect(() => {
      contract.getTransacciones(1);
    }).not.toThrow();
  });
});
