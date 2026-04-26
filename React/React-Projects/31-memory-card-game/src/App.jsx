import { useEffect, useState } from "react";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

const cardValues = [
  "🥝",
    "🍇",
    "🍉",
    "🍌",
    "🍓",
    "🍒",
    "🍎",
    "🍍",
    "🥝", 
    "🍇",
    "🍉",
    "🍌",
    "🍓",
    "🍒",
    "🍎",
    "🍍"
];

const App = () => {
  const [cards, setCards] = useState([])

 const intitailizeGame = ()=> {

 const finalCards =  cardValues.map((value, index)=>({
        id: index,
        value,
        idFlipped: false,
        isMatched: false,
      }))
        setCards(finalCards)
    };
      useEffect(()=>{
         intitailizeGame()
      },[])
  return (
    <div className="app">
      <GameHeader score={4} move={23} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
