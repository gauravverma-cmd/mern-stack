import { useState } from "react"
import Game_Area from "./components/Game_Area"
import HomePage from "./components/HomePage"

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="bg-[#e8e8e8]">
     {isGameStarted ? <Game_Area /> : <HomePage toggle={toggleGame}/>}
    </div>
  )
}

export default App