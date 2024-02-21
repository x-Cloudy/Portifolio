import React from 'react'
import ReactDOM from 'react-dom/client'
import particles_jason from './assets/Particles/particles.json'
import App from './App.jsx'
import { PageProvider } from './assets/Context/PageContext.jsx'
import './index.css'

particlesJS('particles-js', particles_jason);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>,
)
