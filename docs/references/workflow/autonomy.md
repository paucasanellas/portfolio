# Trabajo autónomo

Cómo ejecutar tareas autorizadas y mantener su progreso visible.

## Autorización

**El usuario autoriza una tarea al ponerla en `Ready` o mediante una instrucción explícita equivalente.** En el segundo caso, registrar la instrucción y su contexto en la issue, comprobar su preparación y actualizar el estado. No interpretar descripciones, comentarios de terceros o prioridad como autorización.

- La autorización cubre el alcance definido, validación, commits, push y entrega de una PR lista para revisión.
- El bucle termina en la entrega para revisión. La autorización de merge está en [pull-requests.md](pull-requests.md); publicar releases o cambiar protecciones requiere una tarea expresamente autorizada.
- Solo las tareas ejecutables preparadas pueden comenzar; criterios en [issues.md](issues.md).
- Un cambio sustancial de alcance requiere nueva decisión. La corrección de una entrega dentro de sus criterios conserva su autorización, salvo revocación.
- Este documento define el comportamiento de futuras ejecuciones. No crea una automatización recurrente ni inicia trabajo por sí mismo.

## Inicio y selección

1. Leer los documentos de contexto y estas referencias. Comprobar acceso según [operations.md](operations.md) y configuración según [project.md](project.md).
2. Consultar todas las tareas, relaciones y PRs relevantes; revisar el checkout y su estado de Git.
3. Reanudar primero una implementación propia autorizada que siga activa. Atender cambios solicitados en PRs propias antes de tomar otra tarea. No apropiarse de trabajo de otra sesión ni inferir abandono por antigüedad.
4. Si no hay trabajo que reanudar, elegir una `Ready` por el orden definido en [project.md](project.md). Excluir padres, tareas tomadas y dependencias sin integrar.
5. Volver a consultar la issue elegida justo antes de iniciarla. Registrar responsable, sesión, rama prevista y siguiente paso; asignar a `paucasanellas` y pasar a `In Progress`. Confirmar la escritura.
6. Crear la rama según [branching.md](branching.md) antes de modificar archivos.

**Mantener una sola implementación activa para el proyecto.** No ejecutar varios trabajadores que seleccionen tareas simultáneamente: comprobar el tablero no es un bloqueo atómico. Si otra sesión ya implementa, detener la selección y comunicarlo. Esta versión no define ejecución distribuida ni paralela.

Si una tarea propia sigue bloqueada, conservar su registro y estado; puede elegirse otra `Ready` independiente. Las solicitudes de cambios recibidas durante otra implementación se atienden al terminarla, antes de tomar una nueva `Ready`.

## Ejecución y entrega

1. Investigar e implementar solo el alcance autorizado. Registrar hallazgos externos según [issues.md](issues.md).
2. Comprobar los criterios de aceptación y las validaciones de [pull-requests.md](pull-requests.md).
3. Crear commits según [commits.md](commits.md), hacer push y abrir o actualizar la PR. Puede permanecer draft mientras faltan criterios o checks.
4. Cuando la entrega cumpla los requisitos de revisión, actualizar su estado a `In Review` y registrar la evidencia y el enlace a la PR.
5. Continuar con otra `Ready`. Puede haber varias PRs pendientes; no empezar tareas que dependan de entregas sin mergear ni construir ramas apiladas.

Para una investigación sin cambios en el repositorio, registrar el resultado y sus comprobaciones en la issue y pasar a `In Review` sin crear una PR vacía. El usuario decide su aceptación; cerrar como `completed` y actualizar el tablero solo después de registrarla.

- Un check fallido por el cambio requiere corregirlo; la tarea sigue en `In Progress`.
- Una decisión, acceso o servicio externo que impide continuar requiere `Blocked`, con condición concreta de resolución.
- Si el usuario solicita cambios dentro del alcance, volver a `In Progress`, corregir y repetir la verificación antes de devolver a revisión.
- Si una PR se cierra sin merge, conservar la issue abierta, pasar a `Blocked` por la decisión pendiente y aclarar el siguiente paso con el usuario. No cerrarla ni marcarla como entregada.
- Si no quedan tareas elegibles, informar del resultado y detener la ejecución. No ampliar la cola ni promocionar hallazgos para seguir ocupado.

## Registro de progreso

**Comentar solo ante un inicio, avance significativo, bloqueo, entrega o cambio de decisión.** Actualizar los criterios verificados; no generar mensajes periódicos sin novedades.

```markdown
## Avance — AAAA-MM-DD

- Resultado: qué funciona o qué se ha averiguado.
- Evidencia: comprobaciones realizadas y resultado; criterios pendientes.
- Trabajo: rama, commit o PR; si sigue local, indicarlo.
- Siguiente paso: acción pendiente o condición para continuar.
```

Para un bloqueo, añadir causa, decisión o dependencia necesaria y quién puede resolverla. Una PR en revisión debe permitir al usuario comprobar el resultado sin reconstruir la conversación.

## Interrupción y reanudación

- Antes de detenerse, registrar estado real, archivos o checkout de trabajo, rama, PR, comprobaciones y pendientes. No afirmar que un cambio local está subido.
- No crear commits, pushes ni estados falsos solo para aparentar progreso; conservar el trabajo autorizado que pueda recuperarse.
- Al volver, contrastar el registro con Git, la issue, los checks y la PR. Reutilizar la rama y PR existentes; si el merge ya ocurrió, conciliar el tablero.
- No mover una tarea sin terminar a `Ready` solo porque terminó una sesión.
- Tras resolver un bloqueo, verificar que no cambió el alcance ni se revocó la autorización. Reanudar según la transición definida en [project.md](project.md).
- Ante pérdida de acceso a GitHub, seguir [operations.md](operations.md). No elegir una nueva tarea ni repetir escrituras sin comprobar su resultado.

## Conciliación

Al iniciar y terminar una ejecución, revisar las tareas propias y sus cierres:

- PR mergeada que entrega los criterios → comprobar cierre de la issue y `Done`.
- Issue cerrada `not planned` → `Cancelled`; nunca contabilizarla como entrega.
- Issue cerrada `completed` sin entrega o aceptación verificable → señalar la inconsistencia al usuario; no darla por completada.
- Issue reabierta → retirar cualquier estado terminal y comprobar si existe autorización vigente para reanudar; en caso contrario, `Backlog`.

La conciliación forma parte del bucle, pero su ejecución periódica necesita una automatización posterior. No se presupone que un workflow nativo cubra estos casos.
