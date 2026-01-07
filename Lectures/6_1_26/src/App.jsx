import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [current, setCurrent] = useState(0)
  const [result , setResult] = useState(0)

  function option(){
    
  }

  return (
    <>
     <h1>Quize Game</h1>
     <button onClick={option}>Click</button>
    </>
  )
}

export default App
