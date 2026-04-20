import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // QUAN TRỌNG: Dòng này phải có để web hiện màu!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
