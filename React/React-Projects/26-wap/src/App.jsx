import React, { use, useState, useSyncExternalStore } from "react";
import axios from "axios";
const App = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState(null);
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [region, setRegion] = useState("");
  const [condition, setCondition] = useState("")
  const showWeather = async () => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=750d2b34e5f94457819103353262501&q=${city},India`,
    );
    console.log(response.data);
    setTemp(response.data.current.temp_c);
    setIcon("https:" + response.data.current.condition.icon);
    setHumidity(response.data.current.humidity);
    setWind(response.data.current.wind_kph);
    setRegion(response.data.location.region);
    setCondition(response.data.current.condition.text)
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-900 to-indigo-900">
      {/* Weather Card */}
      <div className="w-[360px] rounded-2xl bg-white/10 backdrop-blur-lg p-6 text-white shadow-xl">
        {/* Search */}
        <input autoFocus
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full rounded-xl bg-white/20 px-6 py-5 text-lg font-semibold outline-none placeholder:text-white/70 capitalize"
        />
        <button
          onClick={showWeather}
          className="w-fit rounded-xl bg-white/20 px-3 py-2 text-lg ml-25 mt-5 active:scale-95 font-semibold outline-none placeholder:text-white/70 capitalize"
        >
          Click here
        </button>
        {/* Weather Icon */}
        <div className="flex justify-center mt-8">
          <img src={icon} alt="weather" className="w-28" />
        </div>

        {/* Temperature */}
        <h1 className="text-center text-6xl font-bold mt-2">{temp}°C</h1>

        {/* Weather Description */}
        <p className="text-center text-xl capitalize text-white/80">
          {condition}
        </p>

        {/* City */}
        <h2 className="text-center text-2xl font-semibold mt-2">{region}</h2>

        {/* Extra Info */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-xl bg-white/15 p-4">
            <p className="text-sm text-white/70">Humidity</p>
            <p className="text-xl font-bold">{humidity}</p>
          </div>

          <div className="rounded-xl bg-white/15 p-4">
            <p className="text-sm text-white/70">Wind</p>
            <p className="text-xl font-bold">{wind}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
