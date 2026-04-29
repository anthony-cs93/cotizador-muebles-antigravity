# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind v4 + shadcn/ui
- **PDF**: jsPDF + jspdf-autotable

## Artifacts

- `artifacts/cotizador-melamina` — Cotizador de muebles de melamina (Spanish). Frontend-only React + Vite app. State via React context + useReducer. Persistence via localStorage. PDF export via jsPDF.
- `artifacts/api-server` — Shared Express API server (not used by cotizador).
- `artifacts/mockup-sandbox` — Canvas mockup sandbox.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
