# GitHub Project

Configuración y significado del tablero de trabajo.

## Identidad

| Dato | Valor |
|---|---|
| Repositorio | `paucasanellas/portfolio` |
| Owner | `paucasanellas` |
| Project | `17` — Portfolio |
| Tablero | [GitHub Project 17](https://github.com/users/paucasanellas/projects/17) |

**La issue define el trabajo; el Project muestra su estado, prioridad y tamaño.** La PR contiene la entrega. No duplicar una tarea añadiendo su PR como otra tarjeta.

## Campos

| Campo | Tipo | Regla |
|---|---|---|
| `Status` | Single select | Estados de la tabla siguiente; entrada predeterminada `Backlog`. |
| `Priority` | Single select | `critical`, `xhigh`, `high`, `medium`, `low`, en ese orden. Sin valor predeterminado. |
| `Estimate` | Number | Solo `1`, `2`, `3`, `5`, `8`. Sin valor predeterminado. |

Usar también los campos nativos `Labels`, `Assignees`, `Linked pull requests`, `Parent issue`, `Sub-issues progress`, `Created`, `Updated` y `Closed`. La preparación exigida antes de ejecutar está en [issues.md](issues.md).

## Estados

| Estado | Significado | Entrada |
|---|---|---|
| `Backlog` | Idea o tarea pendiente de preparación o autorización. | Al crearla; también si se retira su autorización. |
| `Ready` | Tarea preparada y autorizada para empezar. | Según [autonomy.md](autonomy.md). |
| `In Progress` | Implementación activa. | Al registrar el inicio; revisión solicitada que exige cambios. |
| `In Review` | Entrega lista, validaciones correctas, pendiente del usuario. | PR según [pull-requests.md](pull-requests.md); investigación sin archivos según [autonomy.md](autonomy.md). |
| `Blocked` | Trabajo autorizado detenido por una dependencia, decisión o fallo externo. | Registrar causa, contexto y condición para reanudar. |
| `Done` | Entrega completada y aceptada. | PR mergeada; en una entrega sin código, aceptación explícita del usuario. |
| `Cancelled` | Trabajo descartado. | Decisión del usuario, motivo registrado y cierre `not planned`. |

- **Una PR abierta, aunque esté lista, no equivale a `Done`.** Cerrar las entregas aceptadas como `completed`; el estado del tablero no sustituye ese cierre.
- Una dependencia pendiente detectada antes de autorizar mantiene la tarea en `Backlog`.
- Para trabajo ya autorizado, resolver un bloqueo devuelve a `Ready` si no había comenzado, o a `In Progress` si se reanuda su implementación. Revisar antes que la autorización y el alcance sigan vigentes.
- Las issues padre son coordinación: pasan a `In Progress` al comenzar una subtarea y a `Done` según sus criterios de cierre en [issues.md](issues.md). No entran en la cola ejecutable.

## Prioridad

| Valor | Cuándo usarlo |
|---|---|
| `critical` | Incidente o bloqueo crítico que debe atenderse antes que cualquier otro trabajo. |
| `xhigh` | Urgencia o bloqueo que debe adelantarse a `high`. |
| `high` | Impacto importante o dependencia próxima que necesita atención preferente. |
| `medium` | Trabajo normal, sin urgencia ni bloqueo inmediato. |
| `low` | Puede posponerse sin afectar al trabajo planificado. |

**Seleccionar por prioridad; a igual prioridad, por más tareas que desbloquea directamente; después, por mayor antigüedad.** Contar dependientes abiertos mediante las relaciones nativas `blocking`. Si también coincide la fecha, usar el número de issue menor. La prioridad no elimina dependencias ni autoriza trabajo.

## Estimaciones

**Los puntos expresan tamaño relativo del alcance completo: investigación, implementación y validación.** No son horas, días ni porcentaje de avance.

| Puntos | Referencia orientativa |
|---|---|
| `1` | Cambio localizado y conocido: corregir un enlace y comprobarlo. |
| `2` | Cambio pequeño con varios ajustes: añadir un bloque usando componentes existentes. |
| `3` | Cambio acotado con varios estados: implementar un componente y validar móvil y escritorio. |
| `5` | Cambio que coordina varias piezas o tiene incertidumbre: integrar una sección con datos y estados de error. |
| `8` | Entrega amplia que sigue siendo una unidad verificable: crear una página con varias integraciones. |

- El campo numérico no restringe por sí mismo la escala: comprobarla antes de `Ready` y al seleccionar la tarea.
- Si falta información, dejar la estimación pendiente en `Backlog`; no inventar puntos.
- Un tamaño mayor de `8` se divide según [issues.md](issues.md).
- No reducir puntos a medida que se trabaja. Si cambia el alcance, registrar el motivo de la reestimación y revisar la autorización.
- Las issues padre no tienen puntos. Los puntos completados corresponden solo a tareas ejecutables en `Done`; excluir `Cancelled`.

## Vistas

| Vista | Diseño y filtro | Información |
|---|---|---|
| Planificación | Tabla; `is:issue status:Backlog,Ready -label:epic` | Prioridad, puntos, etiquetas, fechas y dependencias. Orden por prioridad y antigüedad. |
| Ejecución | Board por `Status`; `is:issue -label:epic -status:Cancelled` | Cola, implementación, revisión y bloqueos. Suma de `Estimate` y número de tareas por columna. |
| Revisión | Tabla; `is:issue status:"In Review" -label:epic` | PR enlazada, prioridad y actualización. |
| Bloqueos | Tabla; `is:issue status:Blocked -label:epic` | Dependencia o comentario con la decisión pendiente. |
| Entregas | Tabla; `is:issue status:Done reason:completed -label:epic` | Fecha de cierre, PR y puntos entregados. |
| Iniciativas | Tabla; `is:issue label:epic` | Estado y progreso nativo de subtareas, sin suma de puntos. |

El orden visual no sustituye al desempate por dependencias. No sumar padres y subtareas ni issues y PRs del mismo cambio. Mantener las entregas visibles: archivar elementos los excluye de Insights. El total de puntos del backlog puede cambiar; no presentar sus variaciones como productividad o porcentaje estable de un proyecto.

## Configuración pendiente

**Estas reglas definen el sistema deseado; esta entrega solo incorpora documentación.** Inspección del 8 de octubre de 2026: Project vacío, estados `Todo`, `In Progress`, `Done`, sin `Priority` ni `Estimate`; `main` sin protección. Todavía se permiten los tres métodos de merge y no está activo el borrado automático de ramas.

En una tarea posterior:

1. Sustituir `Todo` por `Backlog` y crear el resto de estados. Establecer `Backlog` como entrada predeterminada.
2. Crear `Priority` y `Estimate` con los tipos y opciones documentados.
3. Completar las etiquetas de [issues.md](issues.md) sin borrar etiquetas existentes usadas por bots.
4. Crear las vistas anteriores. Asociar el repositorio al Project y configurar un único auto-add para sus issues abiertas con `is:issue is:open`, nunca para PRs. GitHub Free admite un workflow de auto-add por Project. Añadir manualmente las issues existentes que falten.
5. Desactivar el workflow genérico «issue cerrada → Done» y el cierre de issues al arrastrar tarjetas. La aceptación y el motivo de cierre deben comprobarse antes de actualizar el tablero.
6. Habilitar posteriormente una conciliación con las reglas de [autonomy.md](autonomy.md). Hasta entonces, el operador verifica y actualiza los estados con `gh`; no se presupone sincronización automática.
7. Comprobar visibilidad y plan antes de configurar protecciones. GitHub Free permite proteger `main` en este repositorio público: exigir PR, el check de calidad de CI y resolución de conversaciones; impedir force-push y borrado. El usuario conserva la decisión de merge; no exigir una aprobación formal de un segundo usuario en un repositorio individual. Si el repositorio pasa a privado con GitHub Free, registrar la limitación y mantener las reglas como comprobaciones del agente y del mantenedor; no presentarlas como restricciones impuestas por GitHub ni cambiar visibilidad o plan automáticamente.
8. Permitir solo squash, configurar el título de PR como título del commit y activar el borrado de ramas remotas. No habilitar auto-merge.
9. Reconciliar el límite de Commitlint con [commits.md](commits.md) y comprobar la configuración de [pull-requests.md](pull-requests.md).

**No iniciar el bucle autónomo mientras falten los campos, estados o permisos necesarios.** La publicación inicial de la documentación y la creación de su tarea de configuración pueden realizarse con autorización explícita del usuario. Registrar sus issues, ramas y PRs; anotar en la issue prioridad, estimación y estado lógico si esos campos aún no existen. Esta excepción de adopción no habilita la selección autónoma ni configura el repositorio por sí misma.

## Referencias

- [Sumas de campos numéricos](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-table-layout).
- [Filtros de vistas](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
- [Auto-add](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).
- [Workflows nativos](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations).
- [Protección de ramas y planes compatibles](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
