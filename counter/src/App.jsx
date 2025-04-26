import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='boxes'>
           <div>
           <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)} className='btn1'>Incriment</button>
       <button  onClick={()=>setCount(0)} className='btn2'>Resent</button>
       <button  onClick={()=>setCount(count-1)} className='btn3' >Dicriment</button>
           </div>
        </div>
    </>
  )
}

export default App;