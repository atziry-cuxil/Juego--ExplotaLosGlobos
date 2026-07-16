import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextoPantallaInicio } from './Contexto'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextoPantallaInicio>
      <App />
    </ContextoPantallaInicio>
  </StrictMode>,
)
