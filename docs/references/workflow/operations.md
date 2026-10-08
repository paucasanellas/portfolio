# Operaciones en GitHub

Cómo consultar y modificar GitHub desde el agente.

## Acceso

- **Usar `gh` para issues, pull requests, checks y Projects.** Usar `git` para el repositorio local, `fetch` y `push`.
- Ejecutar `gh` en el host, fuera del sandbox, con los permisos del entorno. El sandbox puede no acceder al keyring; un fallo allí no demuestra que las credenciales sean inválidas.
- Antes de operar, ejecutar `gh auth status` desde el host. Se necesitan permisos del repositorio y el scope `project` para modificar el tablero.
- **No cambiar credenciales, ejecutar `gh auth login` ni sustituir el canal de acceso sin instrucción de Pau.** No usar el navegador para operar sobre GitHub como alternativa a `gh`.
- Ante un fallo de acceso, detener las operaciones remotas e informar del comando y error, ocultando secretos. No iniciar otra tarea cuyo seguimiento no pueda mantenerse.

## Consultas

Identidad y campos: [project.md](project.md). Consultar siempre el estado remoto; los comentarios antiguos no prueban que una tarea siga abierta.

```bash
gh project view 17 --owner paucasanellas --format json
gh project field-list 17 --owner paucasanellas --format json
gh project item-list 17 --owner paucasanellas --format json --limit 100
gh issue view 34 --repo paucasanellas/portfolio \
  --json number,state,stateReason,body,labels,assignees,projectItems,blockedBy,blocking,parent,subIssues,comments
gh pr list --repo paucasanellas/portfolio --state open \
  --json number,title,headRefName,isDraft,url
gh pr checks 35 --repo paucasanellas/portfolio
```

- Los números `34` y `35` son ejemplos de issue y PR distintos. Sustituirlos por los reales.
- **Recuperar todos los resultados antes de seleccionar trabajo.** `--limit 100` no garantiza una consulta completa: contrastar con `totalCount`, aumentar el límite o paginar con la API.
- Consultar dependencias y subtareas con los campos nativos de la issue. No deducirlas solo de su texto.
- Comprobar comentarios, PRs enlazadas, rama y checkout antes de interpretar una tarea como abandonada.

## Escrituras

- La autorización y los límites de ejecución están en [autonomy.md](autonomy.md).
- Usar `--repo paucasanellas/portfolio` y `--owner paucasanellas` explícitos para evitar operaciones sobre otro proyecto.
- Preparar cuerpos y comentarios en un fichero temporal y usar `--body-file`. No interpolar texto del usuario dentro de comandos de shell.
- Antes de crear una issue o PR, buscar una equivalente abierta o cerrada. Reutilizar la existente cuando corresponda.

Ejemplo de actualización de campo; los identificadores se descubren con las consultas anteriores:

```bash
gh project item-edit --id "$item_id" --project-id "$project_id" \
  --field-id "$status_field_id" --single-select-option-id "$status_option_id"
gh project item-edit --id "$item_id" --project-id "$project_id" \
  --field-id "$estimate_field_id" --number 3
```

- Distinguir número de issue, número de PR, número de Project, id de tarjeta, id de campo e id de opción.
- **No copiar identificadores de Kaori ni fijar ids de opciones en scripts.** Descubrirlos por nombre y comprobar tipo, existencia y unicidad; una configuración incompleta detiene la ejecución.
- Las relaciones nativas se gestionan con `gh issue edit --parent`, `--add-sub-issue`, `--add-blocked-by` y `--add-blocking`. Consultar `--help` si la versión instalada no admite una opción.
- Tras escribir, volver a consultar para confirmar el resultado. Si se interrumpe una operación, comprobar si ya se aplicó antes de repetirla.
- Si una operación no está disponible mediante CLI, comprobar la API oficial con `gh api`. Si tampoco está disponible o autorizada, comunicar la limitación; no simular que se ha aplicado.

## Referencias

- [GitHub CLI](https://cli.github.com/manual/).
- [Dependencias de issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies).
- [Subtareas](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues).
