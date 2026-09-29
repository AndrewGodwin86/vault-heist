import type { ToolDef } from '../types.js'

// Swappable agent adapter. AGENT_RUNTIME=anthropic|guild picks the implementation at startup.
// The engine (engine/runLevel.ts) drives the tool loop; a runtime only performs one model turn.
// Implement in runtime/anthropic.ts first, then runtime/guild.ts.

/** Anthropic-style message with content blocks, so tool_use / tool_result can round-trip. */
export interface RuntimeMessage {
  role: 'user' | 'assistant'
  content: string | unknown[]
}

export interface ModelTurn {
  stopReason: 'end_turn' | 'tool_use' | 'max_tokens' | 'other'
  text: string
  toolUses: { id: string; name: string; input: Record<string, unknown> }[]
  /** Raw assistant content blocks, appended to history before the tool_result turn. */
  assistantContent: unknown[]
}

export interface AgentRuntime {
  name: string
  run(system: string, messages: RuntimeMessage[], tools: ToolDef[]): Promise<ModelTurn>
}

export function runtimeName(): 'anthropic' | 'guild' {
  return process.env.AGENT_RUNTIME === 'guild' ? 'guild' : 'anthropic'
}
