import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PageProvider } from './assets/Context/PageContext.jsx'
import Particle from './assets/Particles/Particles.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <div className='main-container'>
        <Particle />
        <App />
      </div>
    </PageProvider>
  </React.StrictMode>,
)
