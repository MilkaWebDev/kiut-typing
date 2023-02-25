
import Landing from './screens/Landing'
import Typing from './screens/Typing'
import { useState } from 'react'
import "./App.css"

function App() {

  const [start, setStart] = useState(true)
  const [user, setUser] = useState({ username: "MILKA" })

  return (
    <>
      {start ?
        <Typing user={user} />
        :
        <Landing setUser={setUser} setStart={setStart} />
      }
    </>
  )
}

export default App
