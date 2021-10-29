# `Quine App`

📄 Descripción
=============================
`Quine App` Es un contrato inteligente Para Crear `Quinielas` y todos los datos son almacenados mediante el protocolo de `NEAR`. La idea del contrato es
debido a que a la hora de crear `Quinielas` con muchas personas es dificil de administrarla y puede existir una desconfianza al coperar para la `Quiniela`
y al momento de cobrar la persona que la Gano. Al crearlo mediante el Protocolo de `Near` en Block Chain, podemos eliminar estaas problematicas de desconfianza.

# El listado siguiente estan las principales funcionalidades de este contrato inteligente:

### Equipos
=============================
1. Crear Equipos.
2. Listado de Equipos.
3. Buscar Equipo por ID.
4. Buscar Equipos por País.
5. Eliminar Equipo por ID.


### Jornadas
=============================
1. Crear Jornadas.
2. Listar todas las Jornadas.
3. Buscar Jornada por ID.
4. Listar Jornadas Iniciadas.
5. Asignar status a Jornada.
6. Eliminar Jornada por ID.


### Partidos
=============================
1. Crear Partidos por Jugar.
2. Listar todos los Partidos por Jugar.
3. Buscar Partido por ID.
4. Buscar Partidos por Status.
5. Asignar Status de Partido.
6. Eliminar Partido por ID. 


### Resultados de Partido
=============================
1. Crear Resultado.
2. Listar todos los Resultados.
3. Mostrar quien Gano el Partido.
4. Eliminar Resultado por ID.


### Quinielas
=============================
1. Crear Quiniela.
2. Listar todas las Quinielas.
3. Buscar Quiniela por ID.
4. Listar Quinielas Abiertas.
5. Cerraar Quiniela por ID.
6. Eliminar Quiniela por ID.


### Participantes de Quiniela
=============================
1. Crear Participante.
2. Listar todas los Participantes.
3. Listar Quinielas por Participante.
4. Eliminar Participante.


### Cobros por Participar / Pagos por Ganar Quiniela
=====================================================
1. Crear Cobro.
2. Listar Cobros/Pagos por Usuario.
3. Listar Pagos por Ganar una Quiniela.
4. Listar todas las Transacciones.



📦 Instalación
==========================

Para ejecutar este proyecto localmente, debe seguir los siguientes pasos:

Paso 1: Prerequisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 (recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
5. Instale NEAR CLI globalmente: [near-cli] es una interfaz de línea de comandos (CLI) para interactuar con NEAR blockchain

    yarn global add near-cli

Step 2: Configuración de NEAR CLI
---------------------------------

Configure su near-cli para autorizar su cuenta de prueba creada recientemente:

    near login

Paso 3: Cree y realice una implementación de desarrollo de contrato inteligente
-------------------------------------------------------------------------------

Cree el código del contrato inteligente de CovidVaccination e implemente el servidor de desarrollo local: `yarn build` (consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional implementado (guárdelo para usarlo más tarde). Para desplegar el contrato generado con `yarn build` en testnet [https://wallet.testnet.near.org/], ejecutar el comando `yarn deploy` el cual nos regresará el id del contrato desplegado el cuál usaremos para ejecutar cada uno de los métodos que contiene el contrato.

📑 Explorando los métodos de contrato inteligente CovidVaccination
==================================================================

Los siguientes comandos le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI (para esto, debe tener implementado un contrato inteligente provisional).

Equipos
=================
Comando para crear Equipo:
--------------------------------------------
    near call $CONTRACT setEquipo '{ "nombre": "string", "liga": "string", "escudo": "string", "pais": "string" }' --account-id <your test account>

Comando para consultar todos los Equipos:
--------------------------------------------
    near view $CONTRACT getEquipos

Comando para consultar un Equipo por id:
--------------------------------------------
    near view $CONTRACT getEquipo '{"id": "i32"}'

Comando para consultar Equipos por País:
--------------------------------------------
    near view $CONTRACT searchEquipoPais '{"pais": "string"}'

Comando para Eliminar un Equipo por id:
--------------------------------------------
    near view $CONTRACT deleteEquipo '{"id": "i32"}'


Jornadas
=================
Comando para crear Jornada:
--------------------------------------------
    near call $CONTRACT setJornada '{ "descripcion": "string", "fecha_inicio": "string", "fecha_final": "string" }' --account-id <your test account>

Comando para consultar todas las Jornadas:
--------------------------------------------
    near view $CONTRACT getJornadas

Comando para consultar una Jornada por id:
--------------------------------------------
    near view $CONTRACT getJornada '{"id": "i32"}'

Comando para consultar Jornadas Iniciadas:
--------------------------------------------
    near view $CONTRACT getJornadasIniciadas

Comando para Asingar Status a Jornada:
--------------------------------------------
    near view $CONTRACT setStatusJornada '{ "id": "i32", "status": "string" }' --account-id <your test account>

Comando para Eliminar Jornada por id:
--------------------------------------------
    near view $CONTRACT deleteJornada '{"id": "i32"}'


Partidos por Jugar
=================
Comando para crear Partido:
--------------------------------------------
    near call $CONTRACT setPartido '{ "jornada_id": "i32", "local_equipo_id": "i32", "visitante_equipo_id": "i32", "fecha": "string", "estadio": "string" }' --account-id <your test account>

Comando para consultar todas los Partidos:
--------------------------------------------
    near view $CONTRACT getPartidos

Comando para consultar un Partido por id:
--------------------------------------------
    near view $CONTRACT getPartido '{"id": "i32"}'

Comando para consultar Partidos por Status:
--------------------------------------------
    near view $CONTRACT getPartidosForStatus '{ "status": "string" }' --account-id <your test account>

Comando para Asingar Status a Partido:
--------------------------------------------
    near view $CONTRACT setStatusPartido '{ "id": "i32", "status": "string" }' --account-id <your test account>

Comando para Eliminar Partido por ID:
--------------------------------------------
    near view $CONTRACT deletePartido '{"id": "i32"}'


Resultados De Partido
=================
Comando para crear Resultado de Partido:
--------------------------------------------
    near call $CONTRACT setResultado '{ "partido_id": "i32", "local": "boolean", "visitante": "boolean", "empate": "boolean" }' --account-id <your test account>

Comando para consultar todos los Resultados:
--------------------------------------------
    near view $CONTRACT getResultados

Comando para consultar quien Gano el partido:
--------------------------------------------
    near view $CONTRACT getGanadorPartido '{ "partido_id": "i32" }'

Comando para Eliminar Resultado por ID:
--------------------------------------------
    near view $CONTRACT deleteResultado '{ "id": "i32" }'


Quinielas
=================
Comando para crear una Quiniela:
--------------------------------------------
    near call $CONTRACT setQuiniela '{ "usuario_id": "i32", "jornada_id": "i32", "costo": "f32", "fecha_cierre": "string" }' --account-id <your test account>

Comando para consultar todas las Quinielas:
--------------------------------------------
    near view $CONTRACT getQuinielas

Comando para consultar Quiniela por ID:
--------------------------------------------
    near view $CONTRACT getQuiniela '{"id": "i32"}'

Comando para consultar Quinielas Abiertas:
--------------------------------------------
    near view $CONTRACT getQuinielasAbiertas

Comando para Cerrar Quiniela por ID:
--------------------------------------------
    near view $CONTRACT cerrarQuiniela '{"id": "i32"}'

Comando para Eliminar Quiniela por ID:
--------------------------------------------
    near view $CONTRACT deleteQuiniela '{"id": "i32"}'


Participate de Quiniela
=================
Comando para crear un Participante de Quiniela:
--------------------------------------------
    near call $CONTRACT setParticipante '{ "usuario_id": "i32", "quiniela_id": "i32" }' --account-id <your test account>

Comando para consultar todas los Participantes:
--------------------------------------------
    near view $CONTRACT getParticipantes

Comando para consultar Quinielas por Usuario:
--------------------------------------------
    near call $CONTRACT getQuinielasForParticipante '{ "usuario_id": "i32" }' --account-id <your test account>

Comando para Eliminar Participante por ID:
--------------------------------------------
    near view $CONTRACT deleteParticipante '{"id": "i32"}'


Cobros / Pagos
=================
Comando para crear un Cobro/Pago:
--------------------------------------------
    near call $CONTRACT setCobro '{ "participante_id": "i32", "quiniela_id": "i32", "monto": "f32", "is_pago": "boolean" }' --account-id <your test account>

Comando listar Cobros por Usuario:
--------------------------------------------
    near call $CONTRACT getCobroForUsuario '{ "usuario_id": "i32" }' --account-id <your test account>

Comando listar Pagos por ganar Quiniela por Usuario :
--------------------------------------------
    near call $CONTRACT getGaneForUsuario '{ "usuario_id": "i32" }' --account-id <your test account>

Comando listar Todas las Transacciones por Usuario :
--------------------------------------------
    near call $CONTRACT getTransacciones '{ "usuario_id": "i32" }' --account-id <your test account>




🤖 Pruebas
--------------------------------
Utilice el siguiente comando para ejecutar las Pruebas Unitarias:

    yarn test


🖥️ Mokups
--------------------------------
![alt text](http://drive.google.com/uc?export=view&id=1sULVUelwkb_xMHntJAPeOV2xSN9BGAmD "Quine App")
![alt text](http://drive.google.com/uc?export=view&id=1A97At_Kx-_5HyRKUG2tnUe8Cg726GV4a "Quine App")
![alt text](http://drive.google.com/uc?export=view&id=1rFOuEMvFwJDtKEmMxpB7YHRGg0rIy6Zy "Quine App")
![alt text](http://drive.google.com/uc?export=view&id=1sDPXzvmLXsoL1cTSj0xAPpRw9l7qCIuX "Quine App")


🎬 Video
--------------------------------
https://www.loom.com/share/f7cdc7bed97b45b3a9eab43590ee26d5
