// All server calls go through here. Vite proxies /api to localhost:3001 in dev.

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })
  const body = await res.json()
  if (!res.ok) throw new Error(body?.error ?? `http_${res.status}`)
  return body as T
}

export function getHealth() {
  return request<{ ok: boolean; runtime: string }>('/api/health')
}
