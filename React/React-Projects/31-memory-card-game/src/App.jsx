import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import GameHeader from "./components/GameHeader";

const baseValues = ["🥝", "🍇", "🍉", "🍌", "🍓", "🍒", "🍎", "🍍"];

// Fisher-Yates shuffle - unbiased
const shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  const timeoutRef = useRef(null);

  const clearPendingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const initializeGame = () => {
    clearPendingTimeout();

    const shuffledCards = shuffle([...baseValues, ...baseValues]).map(
      (value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }),
    );

    setCards(shuffledCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setIsChecking(false);
  };

  useEffect(() => {
    initializeGame();
    return clearPendingTimeout;
  }, []);

  const handleCardClick = (card) => {
    if (
      card.isFlipped ||
      card.isMatched ||
      isChecking ||
      flippedCards.length === 2 ||
      flippedCards.some((c) => c.id === card.id)
    ) {
      return;
    }

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c,
    );
    setCards(updatedCards);

    const updatedFlippedCards = [...flippedCards, card];
    setFlippedCards(updatedFlippedCards);

    if (updatedFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      setIsChecking(true);

      const [firstCard, secondCard] = updatedFlippedCards;
      const isMatch = firstCard.value === secondCard.value;

      timeoutRef.current = setTimeout(
        () => {
          if (isMatch) {
            setScore((prev) => prev + 10);

            // briefly show the match, then reshuffle values back
            // into the board and flip everything face-down again
            setCards((prevCards) => {
              const reshuffledValues = shuffle(prevCards.map((c) => c.value));
              return prevCards.map((c, i) => ({
                ...c,
                value: reshuffledValues[i],
                isFlipped: false,
                isMatched: false,
              }));
            });
          } else {
            setCards((prevCards) =>
              prevCards.map((c) =>
                c.id === firstCard.id || c.id === secondCard.id
                  ? { ...c, isFlipped: false }
                  : c,
              ),
            );
          }

          setFlippedCards([]);
          setIsChecking(false);
          timeoutRef.current = null;
        },
        isMatch ? 600 : 1000,
      );
    }
  };

  return (
    <div className="app">
      <GameHeader score={score} move={moves} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>

      <button className="reset-btn" onClick={initializeGame}>
        Restart Game
      </button>
    </div>
  );
};

export default App;
