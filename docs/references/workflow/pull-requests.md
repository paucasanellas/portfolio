# Pull requests

Cómo entregar, revisar e integrar una tarea.

## Título y cuerpo

- **Título en inglés y con las reglas de [commits.md](commits.md).** Describe el resultado global de la PR y se usará como encabezado del squash.
- Cuerpo en **castellano**, siguiendo `.github/pull_request_template.md`:

| Apartado | Contenido |
|---|---|
| Qué | Problema concreto y comportamiento resultante. |
| Por qué | Motivo y relación con la issue. |
| Cómo probarlo | Pasos reproducibles, comprobaciones realizadas y sus resultados. |
| A tener en cuenta | Migraciones, variables, incompatibilidades o pasos manuales; eliminar si no aplica. |
| Capturas | Evidencia visual cuando corresponda; eliminar si no aplica. |

- Rellenar `Closes #N` con la issue que entrega la PR; no publicar el marcador vacío de la plantilla.
- `Refs #N` enlaza contexto o un padre sin cerrarlo. No cerrar el padre desde la PR de una subtarea.
- Una preview facilita la revisión visual, pero no sustituye la validación de estados relevantes, criterios ni checks.
- Comprobar que la relación issue → PR aparezca en `Linked pull requests`; estructura de tarjetas en [project.md](project.md).

## Draft y revisión

**Una PR pasa a lista para revisión cuando cumple todos los criterios y las comprobaciones aplicables han terminado correctamente.**

1. Abrir draft si hay implementación o validaciones pendientes; una entrega ya terminada puede abrirse directamente lista.
2. Verificar criterios y registrar evidencia. Para cambios visuales, cumplir la validación en navegador integrado del contexto del proyecto.
3. Confirmar validaciones locales y los checks de GitHub para el último commit. Si se actualiza la rama, comprobar de nuevo lo afectado.
4. Quitar draft y pasar la issue a `In Review`. La falta o el fallo de un check esperado no equivale a aprobación.

| Mecanismo actual | Qué ejecuta |
|---|---|
| `pre-commit` | `pnpm lint` y `pnpm typecheck`. |
| `commit-msg` | Commitlint. |
| `pre-push` | `pnpm build`. |
| CI de PR a `main` | Auditoría de dependencias, lint y typecheck; bloquea vulnerabilidades críticas detectadas. |

- El CI actual no ejecuta el build ni valida automáticamente nombres de rama o títulos de PR. Esas comprobaciones siguen siendo responsabilidad del autor.
- Respetar hooks, checks requeridos y requisitos particulares de la tarea. No añadir tests que solo repitan la implementación; usar pruebas acordes al riesgo y al comportamiento modificado.
- Ante un fallo atribuible al cambio, corregirlo antes de revisión. Ante un bloqueo externo, seguir [autonomy.md](autonomy.md).
- Las solicitudes de cambios, PRs cerradas sin merge y el seguimiento se gestionan en [autonomy.md](autonomy.md).

## Merge

**Pau decide el merge; integrar siempre mediante squash.** El agente solo lo ejecuta si Pau lo pide expresamente para esa PR.

Antes del merge:

- Comprobar alcance y criterios, conversaciones resueltas, ausencia de conflictos y checks correctos sobre el último commit.
- Revisar título, issue enlazada y mensaje final del squash. No asumir que la configuración actual de GitHub ya selecciona el título de PR.
- Preparar el cuerpo del squash según las reglas de referencias y coautoría de [commits.md](commits.md). No depender de la selección automática de un mensaje incompleto.

Para un merge expresamente autorizado, preparar el cuerpo en un fichero temporal y guardar el SHA del último commit verificado en `validated_head_sha`:

```bash
gh pr merge 35 --repo paucasanellas/portfolio --squash \
  --subject 'feat(ui): add app header' \
  --body-file /tmp/portfolio-squash-body.md \
  --match-head-commit "$validated_head_sha" --delete-branch
```

- No usar bypass de protecciones ni auto-merge. Verificar el resultado remoto antes de actualizar el seguimiento.
- `Closes #N` cierra la issue al mergear en la rama predeterminada. Si no ocurre, verificar los criterios y el enlace antes de corregir el cierre.
- Actualizar la tarjeta conforme a [project.md](project.md); actualmente no se presupone conciliación automática.
- Borrar la rama remota y la local tras comprobar que la entrega está integrada y no contienen trabajo pendiente. Si un worktree impide el borrado local, conservarlo hasta comprobar y resolver su estado; no forzar la limpieza.
- Una regresión se corrige mediante una nueva issue y PR, incluida una reversión cuando corresponda. No reescribir `main`.

## Bots

- Dependabot y release-please conservan nombres de rama y cuerpos generados. No necesitan una issue artificial ni una segunda tarjeta para cada PR.
- Revisar sus títulos convencionales, cambios y checks; la excepción de nombres no exime de revisión.
- La autorización de merge sigue las reglas de este documento. Encontrar una PR de release abierta no autoriza su publicación.
- Una tarea humana adicional sobre una actualización o release sí se registra como issue según [issues.md](issues.md).
