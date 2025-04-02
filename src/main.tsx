import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Player } from './player'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header>    
      <Player/>
    </header>
  </StrictMode>,
)
