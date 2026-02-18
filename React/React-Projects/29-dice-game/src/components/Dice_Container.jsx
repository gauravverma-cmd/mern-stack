const Dice_Container = ({ resetScore, currentDice, rollDice, toggleRules, showRules }) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col gap-4 items-center">
        <div onClick={rollDice} className="cursor-pointer active:scale-95">
          <img src={`/images/dice_${currentDice}.png`} alt={`dice showing ${currentDice}`} />
        </div>
        <p className="text-2xl font-bold capitalize">
          click on the dice to roll
        </p>
        <div className="flex flex-col gap-2 w-full mt-3">
          <button
            onClick={resetScore}
              className="w-full bg-black text-white border-2 rounded font-bold active:scale-95 cursor-pointer text-lg py-3 capitalize hover:bg-transparent hover:text-black"
          >
            reset score
          </button>
          <button
            onClick={toggleRules}
            className="w-full bg-black text-white border-2 rounded font-bold active:scale-95 cursor-pointer text-lg py-3 capitalize hover:bg-transparent hover:text-black"
          >
            {showRules ? "hide rules" : "show rules"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dice_Container;