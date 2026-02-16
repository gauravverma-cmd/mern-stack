  import TotalScore from "./TotalScore";
  import NumberSelector from "./NumberSelector";
import Dice_Container from "./Dice_Container";

  const Game_Area = () => {
    return (
      <div className="h-screen w-full ">
        <div className="flex items-center justify-between py-5 px-8">
          <TotalScore />
          <NumberSelector />
        </div>
        <Dice_Container />
      </div>
    );
  };

  export default Game_Area;
