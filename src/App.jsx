import { useState } from 'react'

import './App.css'
import './index.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-700 text-red-500 p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card price="20"/>
     <Card/>

       
    </>
  )
}

export default App
