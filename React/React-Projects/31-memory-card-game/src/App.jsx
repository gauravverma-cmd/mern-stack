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
  "🍍",
];

const App = () => {
  const [cards, setCards] = useState([]);

  const intitailizeGame = () => {
    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(finalCards);
  };
  useEffect(() => {
    intitailizeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);
  };

  return (
    <div className="app">
      <GameHeader score={4} move={23} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
