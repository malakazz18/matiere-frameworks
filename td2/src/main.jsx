import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    //fl main.jsx on importe le composant App.jsx pour l'afficher dans le navigateur. Le composant App est rendu dans l'élément root du fichier index.html.
    <App />
  </StrictMode>,
)
