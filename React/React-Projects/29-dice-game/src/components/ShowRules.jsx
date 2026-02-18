const ShowRules = () => {
  return (
    <div className="bg-pink-200 border-2 w-1/3 absolute bottom-15 left-10">
      <h1 className="text-xl font-bold px-4 pt-2">How to play the dice game.. ?</h1>
      <ul className="text-lg font-bold px-4 py-2 list-disc list-inside">
        <li>Select any number</li>
        <li>Click on the image</li>
        <li>After clicking the dice, if the selected number matches the dice number, you will get the same points as the dice</li>
        <li>If you guess wrong, 2 points will be deducted</li>
      </ul>
    </div>
  );
};

export default ShowRules;