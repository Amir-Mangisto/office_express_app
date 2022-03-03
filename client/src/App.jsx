import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {getAllUSers} from './Components/service/user-service'

function App() {
  const getAll = ()=>{
    getAllUSers()
    .then(user=>console.log(user))
    .catch((err)=>{console.log(err)})

  }  
  return (
    <div className="App">
      <button onClick={getAll}>click</button>
    </div>
  )
}

export default App
