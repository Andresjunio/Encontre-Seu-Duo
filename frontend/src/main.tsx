import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sign from './Screens/Sign'
import './Styles/main.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<App />*/}
    <Sign />

  </React.StrictMode>,
)
