# Commits

Convención basada en [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

## Formato

```text
<type>[optional scope][!]: <description>

[optional body]

[optional footers]
```

- **Mensajes en inglés. Encabezado de hasta 72 caracteres**, incluido tipo, scope y descripción.
- Tipo y scope en minúsculas; scope opcional, breve y asociado al área afectada, como `ui`, `i18n`, `deps` o `workflow`.
- Descripción en imperativo, empezando en minúscula y sin punto final: `add`, `fix`, `remove`, `update`.
- Un commit expresa un cambio lógico; evitar «various changes» y mezclar trabajo de distintas issues.
- Cuerpo opcional para explicar la razón y las decisiones relevantes. Separar cuerpo y trailers con líneas vacías; líneas de cuerpo y trailers de hasta 100 caracteres, salvo URLs.
- Para referenciar la tarea, usar `Refs: #34`. El cierre de entrega pertenece a la PR, según [pull-requests.md](pull-requests.md).
- Conservar trailers de coautoría reales; no inventar autores ni eliminarlos al preparar un squash.

## Tipos

| Tipo | Cambio |
|---|---|
| `feat` | Funcionalidad nueva. |
| `fix` | Corrección de comportamiento. |
| `docs` | Solo documentación. |
| `refactor` | Reestructuración sin añadir funcionalidad ni corregir un bug. |
| `perf` | Mejora de rendimiento. |
| `chore` | Mantenimiento que no encaja en otro tipo. |
| `style` | Formato de código sin cambiar su comportamiento. |
| `test` | Pruebas. |
| `build` | Sistema de build o dependencias. |
| `ci` | Workflows e integración continua. |
| `revert` | Reversión de un cambio anterior; identificar el commit revertido. |

**`style` no significa diseño visual.** Una nueva interfaz usa `feat(ui)`; corregir su comportamiento o presentación usa `fix(ui)`.

```text
feat(ui): add app header
fix(i18n): correct resume link
docs(workflow): document autonomous task execution
build(deps): update nuxt
```

## Cambios incompatibles

- Señalar un cambio incompatible con `!` en el encabezado o un trailer `BREAKING CHANGE:`. Describir impacto y migración en el cuerpo y en la PR.
- No usar `!` solo porque el cambio es grande. La incompatibilidad puede pertenecer a cualquier tipo.

```text
feat(api)!: replace the projects response format

BREAKING CHANGE: consumers must read project items from the data field.
```

`feat` y `fix` alimentan versiones minor y patch; una incompatibilidad alimenta major. El repositorio ya usa release-please: consultar su configuración antes de describir notas o versiones. Esta convención no autoriza publicar una release.

## Validación actual

- `.husky/commit-msg` ejecuta `pnpm exec commitlint --edit "$1"`.
- `package.json` extiende `@commitlint/config-conventional`. **Actualmente admite encabezados de hasta 100 caracteres; la regla del proyecto es 72.** Comprobar el límite manualmente hasta ajustar la configuración.
- Commitlint no garantiza idioma, imperativo, calidad del mensaje ni coherencia del tipo con el cambio. Revisarlos al preparar commits y PRs.
- Los requisitos de verificación y merge están en [pull-requests.md](pull-requests.md); no eludir hooks ni checks para conseguir un commit.
