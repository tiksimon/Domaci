import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Forma} from './components/forma.jsx'

const App = ()=>{
  return (
    <div>
        <Forma str="Dugme"/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)