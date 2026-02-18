import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Dice_Container from "./Dice_Container";
import { useState } from "react";

const Game_Area = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("")

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber) {
      setError(alert("Please Select the number first"))
      return;
    } setError("")
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    
     if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
     } else {
      setScore((prev) => prev - 2)  
     }
     setSelectedNumber(undefined)
  };
 const resetScore = () => {
  setScore(0)
 }
  return (
    <div className="h-screen w-full ">
      <div className="flex items-center justify-between py-5 px-8">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Dice_Container
        resetScore={resetScore}
        currentDice={currentDice}
        rollDice={rollDice}
      />
    </div>
  );
};

export default Game_Area;
