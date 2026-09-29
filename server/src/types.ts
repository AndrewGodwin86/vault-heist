// Data model from docs/Vault Heist — Hackathon Build Spec.md › Architecture › Data model.

export type LevelId = 'gatekeeper' | 'poisoned-plugin' | 'overpowered-assistant'

export interface ToolDef {
  name: string
  description: string
  input_schema: Record<string, unknown>
  run: (input: Record<string, unknown>) => unknown // simulated only, never real side effects
}

export interface ToolCall {
  name: string
  input: Record<string, unknown>
  output: unknown
  verdict?: GateVerdict
}

export interface AgentResult {
  text: string
  toolCalls: ToolCall[]
}

export interface Level {
  id: LevelId
  title: string
  topics: string[]
  briefing: string
  goal: string
  systemPrompt: string // server only
  tools: ToolDef[] // server only
  autoUserMessage?: string // Level 2 fixed task
  acceptsCustomTool: boolean // Level 2 only
  checkWin: (r: AgentResult) => boolean // server only
  hints: [string, string, string]
  debrief: string // returned only on win
}

/** What GET /api/levels exposes. Never systemPrompt, tools, secrets, checkWin or debrief. */
export type PublicLevel = Pick<Level, 'id' | 'title' | 'topics' | 'briefing' | 'goal' | 'hints' | 'acceptsCustomTool'>

export interface Msg {
  role: 'user' | 'assistant'
  content: string
}

// Jev Shield (stretch)
export interface GateContext {
  levelId: string
  trustedTask: string
  policy?: string
  facts?: Record<string, unknown>
}

export interface GateVerdict {
  decision: 'allow' | 'review' | 'block'
  confidence: number
  reason: string
}
