# Vault Heist

Break into AI agents that have tools. Three levels, four attack classes: prompt injection, tool poisoning, MCP supply-chain risk, and excessive permissions.

## Setup

```bash
npm install
cp .env.example .env   # add your ANTHROPIC_API_KEY
npm run dev            # http://localhost:5173
```

## Architecture

_TODO_

## Security

_TODO: controls summary and Snyk result._

> **Note for judges:** every "secret" in `server/src/levels/*.ts` (e.g. `MOONLIGHT-42`) is a deliberately fake canary used as the game's win condition, not a leaked credential.
