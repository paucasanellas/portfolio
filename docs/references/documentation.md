# Cómo documentar el proyecto

Reglas para escribir la documentación de este proyecto. Aplican a agentes y a usuarios por igual.

## Niveles

| Nivel | Ruta | Carga | Contenido |
|---|---|---|---|
| Obligatoria | `docs/core/` | Siempre presente en el contexto de los agentes | Lo que hay que saber para trabajar en el proyecto |
| Puntual | `docs/references/` | Descubrimiento progresivo, solo cuando se necesita | Detalle de conceptos concretos |

- Antes de añadir algo a `docs/core/`, comprobar que de verdad hace falta en todo momento: cada línea ocupa contexto en cada sesión.

## Idioma

- El contenido se escribe en **castellano**.
- Excepción: el `README.md` va en **inglés** — es la puerta de entrada pública del repositorio.
- Las carpetas y los nombres de fichero van en **inglés y en kebab-case**, salvo nombres convencionales como `README.md` y `AGENTS.md`.
- Los identificadores y fragmentos de código conservan su idioma original.

## Tono

- Frío y directo. Sin rodeos, sin justificaciones largas, sin adornos.
- Listas y tablas antes que párrafos. Un párrafo solo cuando una lista no puede expresarlo.
- Frases cortas. Cada frase aporta información o se elimina.
- La información más relevante de cada documento, en **negrita**.

## Contenido

- **Sin repetición: cada regla vive en un solo fichero.** `AGENTS.md` solo enlaza, no duplica.
- Sin detalle extremo: **lo justo para actuar**. Se itera cuando hace falta.

## Mantenimiento

- **Quien cambia un comportamiento documentado actualiza el documento en el mismo cambio.** Documentación que contradice el código es peor que ninguna.
- Cuando un cambio altera la descripción, las capacidades principales, la instalación o el uso del repositorio, revisar `README.md` y actualizarlo en el mismo cambio si ha quedado incompleto o desactualizado.

## Estructura

- **Un documento cubre un solo concepto.** Separar los conceptos que puedan consultarse y mantenerse de forma independiente.
- Los documentos se agrupan en subcarpetas por contexto cuando aporta claridad.

## Registro en AGENTS.md

- **Todo fichero nuevo en `docs/` se registra en `AGENTS.md`**: los de `core/` en la lista de contexto obligatorio y los de `references/` en la tabla.
- La lista de `core/` contiene una ruta por línea.
- La tabla de `references/` tiene dos columnas: la ruta y una línea que dice cuándo consultar el fichero.
- **La descripción debe permitir decidir cuándo consultar el fichero.** Indicar situaciones concretas; evitar descripciones vagas.
