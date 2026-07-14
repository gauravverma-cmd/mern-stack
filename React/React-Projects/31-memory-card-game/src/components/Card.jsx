const Card = ({ card, onClick }) => {
  const isDisabled = card.isFlipped || card.isMatched;

  return (
    <div
      className={`card ${isDisabled ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={() => !isDisabled && onClick(card)}
      role="button"
      tabIndex={0}
      aria-label={card.isMatched ? `Matched ${card.value}` : "Memory card"}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
          e.preventDefault();
          onClick(card);
        }
      }}
    >
      <div className="card-front">?</div>
      <div className="card-back">{card.value}</div>
    </div>
  );
};

export default Card;