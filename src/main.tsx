import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import p5 from 'p5';
import { Player } from './player'




createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <>    
      <Player/>
    </>
  // </StrictMode>,
)
