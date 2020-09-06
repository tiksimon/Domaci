import React, { useState } from 'react'

// 1. Napraviti komponentu Forma kojoj se prosledjuje string preko propsa iz App-a. Forma sadrzi jedno input polje i jedno dugme. Dobijeni string se ispisuje u dugmetu.

export const Forma = ({insert}) => {

    return (
      <form>
        <input type='text'/>
        <button>{insert}</button>
      </form>    
    ) 
}

