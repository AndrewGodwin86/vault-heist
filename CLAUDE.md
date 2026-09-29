# Vault Heist

Three-level Gandalf-style hackathon game: players attack tool-using AI guard agents to learn prompt injection, tool poisoning, MCP supply-chain risk and excessive permissions.

- **Spec (source of truth):** `docs/Vault Heist — Hackathon Build Spec.md` — level configs, system prompts, win conditions, hints, API contract, security requirements, timeline.
- **Mockups:** `mockups/Vault Heist Mockups.dc.html` — 1280×800 screens 1a (briefing), 1b (chat + hints), 1c (win + debrief), 2a (tool publisher + tool log), 3a (RefundBot + ledger), 3b (Jev Shield), 4a (final). Match these layouts.
- **Design system:** `mockups/_ds/bvn-design-system-*/README.md`. Theme tokens already ported to `client/src/index.css` — use its tokens and classes (`.label`, `.btn`, `.btn--accent`, `.btn--ghost`, `.input`, `.secret`) rather than new colours.

## Commands

- `npm install` — installs both workspaces
- `npm run dev` — server on :3001 (tsx watch) + client on :5173 (Vite, proxies `/api`)
- `npm run typecheck` — server tsc + client build

## Layout

- `client/` — Vite + React 19 + TS, plain CSS. Components go in `client/src/components/`; all fetches in `client/src/api.ts`.
- `server/src/` — Express 5 + TS (ESM, NodeNext: use `.js` in relative imports).
  - `index.ts` middleware (helmet, CORS, rate limit, 16kb JSON) + routes
  - `types.ts` data model from the spec
  - `routes/levels.ts`, `engine/runLevel.ts`, `runtime/{anthropic,guild}.ts`, `levels/*.ts`, `validation.ts`, `shield/jev.ts` — to build
- Env loads via Node `--env-file-if-exists=../.env` (no dotenv). See `.env.example`.

## Rules

- Server owns every prompt, secret, tool and win check. `GET /api/levels` returns only the public view.
- Win checks run only on output generated in the current request.
- All tools are simulated stubs. No real side effects.
- Render agent text and tool args as React text nodes only — no `dangerouslySetInnerHTML`, no markdown rendering, no `eval`.
- Validate every request body with zod (limits in the spec's Security section).
- Errors to client: `{ error: "<code>" }` only; details go to server logs.
- Keep dependencies minimal (Snyk is 20% of the score). Ask before adding one.
- Visual: black ground, white hairlines, amber only for wins / hints / current level, Mono for labels, logs and secrets. No shadows, gradients, rounded containers or emoji.
