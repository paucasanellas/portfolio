# Issues

Cómo definir trabajo trazable y preparado para ejecución.

## Unidad de trabajo

- **Todo cambio humano tiene una issue del repositorio y una tarjeta en el Project.** Incluye documentación y mantenimiento pequeños. Excepciones de bots: [pull-requests.md](pull-requests.md).
- Una issue ejecutable entrega un resultado verificable. Si modifica el repositorio, tiene una rama y una PR; una investigación sin cambios en archivos registra su resultado en la issue para aceptación del usuario. Separar trabajo que pueda entregarse y revisarse de forma independiente.
- Título, descripción y comentarios en **castellano**. El título expresa una acción y su resultado, por ejemplo «Añadir el encabezado de la aplicación».
- No guardar tareas ejecutables como draft items del Project: convertirlas en issues para obtener número, relaciones y seguimiento.

## Descripción

Usar esta estructura; es una guía documental, no una nueva plantilla instalada:

```markdown
## Contexto
Problema actual y evidencia que lo justifica.

## Objetivo
Resultado observable de la tarea.

## Alcance

- Cambios necesarios para conseguirlo.

## Fuera de alcance

- Trabajo relacionado que esta entrega no incluye.

## Criterios de aceptación

- [ ] Comportamiento verificable y cómo comprobarlo.

## Dependencias

- Issues previas y condición que desbloquea esta tarea, o «Ninguna».
```

- Los criterios incluyen estados de error y compatibilidad cuando corresponda. Para UI, incluir las comprobaciones visuales exigidas por el contexto del proyecto.
- Las relaciones nativas son la fuente de verdad de las dependencias; el texto explica su motivo. Actualizar ambos al cambiar una dependencia.
- Marcar un criterio solo tras verificarlo y registrar evidencia. Los comentarios guardan avances temporales; las reglas permanentes viven en `docs/`.

## Preparación

**Antes de `Ready`, una tarea ejecutable debe tener:**

- Objetivo, alcance y exclusiones suficientemente definidos.
- Criterios de aceptación verificables.
- Al menos una etiqueta de naturaleza, `Priority` y un `Estimate` válido según [project.md](project.md).
- Dependencias registradas y satisfechas: cambios previos integrados, no solo PRs abiertas.
- Accesos y decisiones necesarios disponibles.
- Autorización según [autonomy.md](autonomy.md).

`Backlog` admite ideas incompletas, campos pendientes y dudas explícitas. Prepararlas no concede autorización. Si hace falta una investigación independiente para definir una implementación, crear una tarea de investigación con resultado y criterios propios.

## Etiquetas

| Etiqueta de naturaleza | Uso |
|---|---|
| `feature` | Funcionalidad nueva. |
| `bug` | Corrección de un comportamiento roto. |
| `documentation` | Creación o modificación de documentación. |
| `chore` | Mantenimiento y tareas rutinarias. |
| `refactor` | Mejora interna sin alterar el comportamiento. |
| `ci` | Integración continua y pipelines. |
| `test` | Añadir o mejorar pruebas. |
| `dependencies` | Actualización de dependencias. |
| `design` | Diseño visual y de interfaz. |
| `content` | Textos, imágenes y contenido editorial del portfolio. |
| `security` | Vulnerabilidades y endurecimiento. |
| `accessibility` | Barreras que afectan a personas con discapacidad. |

- Combinar categorías relevantes: encabezado nuevo → `feature`, `design`, `accessibility`; documentación del flujo → `documentation`; actualización de paquetes → `dependencies`, `chore`.
- No duplicar prioridades o estados mediante etiquetas. No usar `enhancement` como sinónimo de `feature` en nuevas tareas del flujo.
- `epic` identifica coordinación mediante subtareas; acompañarla de etiquetas de naturaleza.
- `duplicate`, `invalid` y `wontfix` describen motivos de descarte. `question`, `help wanted` y `good first issue` son auxiliares; ninguna sustituye la naturaleza de una tarea preparada.
- `autorelease: pending`, `autorelease: tagged`, `github_actions` y `javascript` pertenecen a bots. No asignarlas manualmente como clasificación de trabajo.
- Las etiquetas no tienen que coincidir con los tipos de commit. Los tipos se eligen según [commits.md](commits.md).

## Subtareas

**Una entrega mayor que 8 puntos se descompone antes de ejecutar.**

1. Convertir la iniciativa en issue padre con `epic`, objetivo y criterios conjuntos; sin `Estimate` ni implementación propia.
2. Crear subtareas nativas de hasta 8 puntos. Cada una define una entrega independiente con sus propios criterios y metadatos.
3. Registrar dependencias entre subtareas. Pertenecer al mismo padre no implica un orden de ejecución.
4. Añadir padre y subtareas al Project. Usar `Sub-issues progress`; no mantener una segunda lista de progreso manual.
5. Autorizar cada subtarea por separado. Autorizar el padre no autoriza todos sus descendientes.
6. Cerrar el padre cuando todas las subtareas estén completadas y el usuario acepte los criterios conjuntos. Si alguna se cancela, revisar con el usuario el alcance del padre antes de cerrarlo como completado.

Ejemplo: «Reconstruir la home» coordina «Añadir encabezado», «Crear presentación» y «Mostrar proyectos». Cada subtarea tiene su rama y PR; el padre no genera una PR adicional.

## Hallazgos y descartes

- Para trabajo fuera de alcance, buscar primero una issue equivalente. Crear o actualizar una propuesta en `Backlog` con contexto, etiquetas y relaciones; estimar solo si hay información suficiente.
- Un bug crítico recién descubierto se comunica con su evidencia y propuesta de prioridad. Su urgencia no autoriza empezar por sí sola.
- Registrar duplicados y enlazar la issue canónica. Aplicar una cancelación cuando el usuario la decida, usando el cierre y estado definidos en [project.md](project.md).
