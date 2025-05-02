import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // ✅ Correctly imported
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'

// ✅ Use createRoot directly
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
