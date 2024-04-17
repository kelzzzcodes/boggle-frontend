import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Boggle from './Boggle'
import { Provider } from 'react-redux'
import { Store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { AppProvider } from './AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <Boggle />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
    ,
  </Provider>,
)
