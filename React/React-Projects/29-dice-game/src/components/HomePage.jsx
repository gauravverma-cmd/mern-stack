const HomePage = ({ toggle }) => {
  return (
    <div className="flex items-center justify-between px-32 py-20 h-screen">
      <div className="">
        <img src="\public\images\dices.png" alt="" />
      </div>
      <div className="flex flex-col gap-5 items-end">
        <h1 className="uppercase text-8xl font-extrabold">dice game</h1>
        <button
          onClick={toggle}
          className="capitalize border-2 bg-black text-white px-16 active:scale-95 cursor-pointer font-medium py-3 w-fit hover:bg-transparent
           hover:text-black">
          stat game
        </button>
      </div>
    </div>
  );
};

export default HomePage;
