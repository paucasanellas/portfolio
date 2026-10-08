# Pau Casanellas — Personal Portfolio

My personal website and portfolio as a web developer. A place to introduce myself, share my professional background and current role, showcase my work, and make my résumé easy to find.

## Stack

| Technology | Purpose |
| --- | --- |
| Nuxt 4 | Application framework, routing, and server rendering |
| Vue 3 | Components and reactive interfaces |
| TypeScript | Static typing |
| Nuxt UI 4 | UI components and theme configuration |
| Tailwind CSS 4 | Styling |
| Pinia | Shared application state |
| Nuxt i18n | Localization; Spanish is currently the default and only configured locale |
| Lucide via Iconify | Icons |
| Zod | Schema validation |
| ESLint | Code linting |
| Husky & Commitlint | Git hooks and Conventional Commits |
| pnpm | Dependency management |

## Getting started

### Requirements

- Node.js 24 or newer; the project runtime configuration targets Node.js 24.
- pnpm 11.22.0, as specified in `package.json`.
- Git.

### Local setup

Clone the repository and open its directory, then run:

```bash
pnpm install
cp .env.example .env
pnpm dev
```

The example environment file sets `PORT=8000`. Open [localhost:8000](http://localhost:8000) once the development server is running, or use the URL printed in the terminal if the port is overridden.

To expose the development server to other devices on your local network:

```bash
pnpm dev:host
```

### Environment variables

| Variable | Example value | Purpose |
| --- | --- | --- |
| `PORT` | `8000` | Local server port |

Keep local environment values in `.env`, which is ignored by Git. Document any new variables in `.env.example`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm dev:host` | Start the development server with network access |
| `pnpm build` | Create a production build |
| `pnpm preview` | Preview a production build locally after building |
| `pnpm lint` | Check code with ESLint |
| `pnpm lint:fix` | Apply automatic ESLint fixes |
| `pnpm typecheck` | Run Nuxt and Vue TypeScript checks |
| `pnpm prepare` | Set up Husky Git hooks; also runs during installation |

## Development workflow

Before committing changes, run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Git hooks run linting before commits, type checking and a production build before pushes, and Commitlint to validate commit messages. Use Conventional Commits, for example:

```text
feat: add the about section
fix: correct résumé download link
docs: update setup instructions
```

Pull requests targeting `main` run dependency auditing, linting, and type checking through GitHub Actions. Release Please is configured to manage release updates on pushes to `main`.

The `audit.ignore` list in `pnpm-workspace.yaml` contains three explicitly approved Nuxt DevTools advisory exceptions from issue #5. These exceptions suppress those specific audit findings; they do not fix the dependencies. All other advisories remain checked. Review and remove the exceptions when compatible upstream fixes are available.

## Production

Build and preview the application locally:

```bash
pnpm build
pnpm preview
```

Nuxt generates production output in `.output/`. The repository also includes a Vercel configuration that disables deployments for Dependabot branches.
