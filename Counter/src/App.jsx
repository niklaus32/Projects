import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  if (count == -2){
    setCount((count) => 0)
  }

  return (
    <>
      <Card/>
      <div className="counter">
        {count >= 0 ? <p>Count is {count}</p> : "Count cannot go below 0"}
      </div>
      <button onClick={() => setCount((count) => count -1 )} className="minus">-</button> 

      <button onClick={() => setCount((count) => count + 1 )} className="plus">+</button>
      
    </>
  )
  
}

export default App
