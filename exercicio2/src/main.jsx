import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Filho from './components/Pai'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Filho />
  </StrictMode>,
)
