import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  Usestate from './Usestate'
import Addbutton from'./Addbutton'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App /> 
    <Usestate/>
    <Addbutton/>
  </React.StrictMode>,
  
)
