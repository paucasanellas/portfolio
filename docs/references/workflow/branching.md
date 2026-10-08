# Ramas

Estrategia **trunk-based**: `main` es la única rama permanente; las demás cubren entregas cortas y revisables.

## Base y aislamiento

- **No modificar ni commitear directamente en `main`.** Crear la rama antes de implementar; toda integración pasa por [pull-requests.md](pull-requests.md).
- Para una nueva tarea, partir del `main` remoto actualizado. Para reanudar una tarea, conservar su rama existente y comprobar su estado.
- Antes de cambiar de rama, revisar `git status`, la rama actual y los cambios locales. No descartar, commitear, mover ni guardar en stash trabajo ajeno automáticamente.
- Si el checkout contiene trabajo de otra tarea, usar un worktree separado o detenerse para resolver el aislamiento. No mezclar entregas.
- Si `main` local diverge, investigar la diferencia; no forzar un reset ni un pull que reescriba commits locales.

En un checkout limpio, sin divergencias:

```bash
git fetch origin
git switch main
git merge --ff-only origin/main
git switch -c feat/34-add-app-header
```

Si la rama ya existe, comprobar que corresponde a esa issue y reanudarla. No crear una segunda rama para evitar investigar su estado.

## Nombre

**Formato: `<type>/<issue-number>-<english-kebab-description>`.**

- `issue-number` es el número real de la issue del repositorio, no el número de PR ni el id de tarjeta del Project.
- Descripción breve, preferiblemente de dos a cuatro palabras, en inglés y kebab-case.
- El prefijo corresponde al resultado principal de la tarea; usar los tipos de [commits.md](commits.md) exactamente: `feat/`, no `feature/`.
- No usar prefijos personales, `codex/`, `bugfix/` ni `hotfix/`. La urgencia pertenece a la prioridad; no al nombre de rama.
- Los commits de una rama pueden tener tipos diferentes cuando lo requiera el cambio; no falsear su clasificación para hacerlos coincidir con el nombre.

| Issue de ejemplo | Rama |
|---|---|
| #34 Añadir encabezado | `feat/34-add-app-header` |
| #35 Corregir enlace del encabezado | `fix/35-correct-header-link` |
| #36 Documentar el flujo de Git | `docs/36-document-git-workflow` |
| #37 Actualizar dependencias | `build/37-update-project-dependencies` |

Las ramas generadas por bots conservan su convención; excepciones en [pull-requests.md](pull-requests.md).

## Historia y limpieza

- No hacer force-push a `main` ni reescribir historia compartida. Sin una autorización específica, actualizar una rama publicada integrando `origin/main` y resolviendo sus conflictos.
- Revalidar el resultado tras resolver conflictos. No aceptar automáticamente una versión completa de un fichero para evitar revisar el conflicto.
- Eliminar ramas tras el merge según [pull-requests.md](pull-requests.md). Antes de borrar una rama local o worktree, comprobar que no contiene trabajo pendiente.
