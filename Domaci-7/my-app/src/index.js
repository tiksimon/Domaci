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

// Napraviti komponentu Card koja preko propsa dobija string i URL iz App-a. komponenta Card ima podkomponente Emoji i Description. String se ispisuje unutar komponente Description a URL se koristi za kreiranje slike unutar komponente Emoji.