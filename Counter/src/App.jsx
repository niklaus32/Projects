import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  if (count<0) {
    setCount((count) => 0)
  }

  return (
    <>
      <Card/>
      <div className="counter">
        <p>Count is {count}</p>
      </div>
      <button onClick={() => setCount((count) => count -1 )} className="minus">-</button>

      <button onClick={() => setCount((count) => count + 1 )} className="plus">+</button>
      
    </>
  )
  
}

export default App
