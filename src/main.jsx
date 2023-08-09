import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import OperationSelect from './routes/OperationSelect.jsx'
import Transferecias from './routes/Transferencias.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <OperationSelect/> 
  },
  {
    path: "transferencias",
    element: <Transferecias/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
