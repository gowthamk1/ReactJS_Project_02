import StartGame from "./Componants/StartGame"
import { useState } from "react"

function App() {

  const[isGameStarted, setIsGameStarted] = useState(false)

  const toggleGame = () => {
    setIsGameStarted((prev)  => !prev)
  }

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame/>}
      <StartGame/>
    </>
  )
}

export default App
