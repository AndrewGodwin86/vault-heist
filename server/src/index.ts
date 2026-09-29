import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { runtimeName } from './runtime/index.js'

const PORT = Number(process.env.PORT ?? 3001)
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:5173'

const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: CORS_ORIGIN }))
app.use(express.json({ limit: '16kb' }))
app.use(
  '/api',
  rateLimit({
    windowMs: 60_000,
    limit: 20,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    handler: (_req, res) => {
      res.status(429).json({ error: 'rate_limited' })
    },
  }),
)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, runtime: runtimeName() })
})

// TODO: app.use('/api/levels', levelsRouter) — see routes/levels.ts

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'not_found' })
})

// Generic errors only; details stay in server logs.
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err)
  const status = (err as { status?: number }).status === 400 ? 400 : 500
  res.status(status).json({ error: status === 400 ? 'bad_request' : 'internal_error' })
})

app.listen(PORT, () => {
  console.log(`vault-heist server on http://localhost:${PORT} (runtime: ${runtimeName()})`)
})
