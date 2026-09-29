import { useEffect, useState } from 'react'
import { getHealth } from './api'

// Scaffold shell: header + sidebar + main panel, matching the mockup layout.
// Replace the main panel with BriefingCard / ChatPanel / DebriefCard as levels are built.
export default function App() {
  const [status, setStatus] = useState('checking…')

  useEffect(() => {
    getHealth()
      .then((h) => setStatus(`server ok · runtime: ${h.runtime}`))
      .catch(() => setStatus('server unreachable'))
  }, [])

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header
        style={{
          height: 'var(--header-h)',
          flex: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          borderBottom: 'var(--rule)',
        }}
      >
        <span className="label" style={{ fontSize: 12 }}>Vault Heist</span>
        <span className="label" style={{ fontSize: 12 }}>0 of 3 cracked</span>
        <button className="btn btn--ghost btn--sm">Reset</button>
      </header>
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <aside style={{ width: 'var(--sidebar-w)', flex: 'none', borderRight: 'var(--rule)' }} />
        <main style={{ flex: 1, padding: '48px 56px' }}>
          <div className="label accent">Scaffold</div>
          <h1 style={{ margin: '20px 0 40px' }}>Vault Heist</h1>
          <p className="mono muted">{status}</p>
        </main>
      </div>
    </div>
  )
}
