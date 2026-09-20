'use client'

import { useEffect } from 'react'

const PLAYER_ID = 'vid-6a88546c37001e9bd01e852e'
const PLAYER_SRC =
  'https://scripts.converteai.net/660d559e-4353-4926-84f9-8147539b6d98/players/6a88546c37001e9bd01e852e/v4/player.js'

export function VslPlayer() {
  useEffect(() => {
    // Avoid injecting the script more than once
    if (document.getElementById('vturb-player-script')) return

    const s = document.createElement('script')
    s.id = 'vturb-player-script'
    s.src = PLAYER_SRC
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <vturb-smartplayer
      id={PLAYER_ID}
      suppressHydrationWarning
      style={{ display: 'block', margin: '0 auto', width: '100%' }}
    >
      <div
        className="vturb-player-placeholder"
        suppressHydrationWarning
        style={{
          position: 'relative',
          width: '100%',
          padding: '56.25% 0 0',
          zIndex: 0,
          backgroundColor: 'black',
        }}
      />
    </vturb-smartplayer>
  )
}
