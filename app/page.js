'use client';
import { useEffect } from "react";
import { useState } from "react";
import SearchBar from "./components/searchBar";
import NavigationMenu from "./components/navigationMenu";
import CurrentTemp from "./components/currentTemp";
import TodaysWeather from "./components/todaysWeather";
import FiveDaysTemp from "./components/fiveDaysTemp";
export default function Home() {
  const [city, setCity] = useState("CALGARY");
  const [locationKey, setLocationKey] = useState("");
  const [currTemp, setCurrTemp] = useState("");
  const [twelveHourForecast, setTwelveHourForecast] = useState([]);
  const [fiveDaysForecast, setFiveDaysForecast] = useState([]);
  useEffect(async ()=>{
    setLocationKey( await getLocationKey(city));
    setCurrTemp( await getCurrTemp(locationKey));
    setTwelveHourForecast(await getTwelveHourForecast(locationKey));
    setFiveDaysForecast(await getFiveDaysForecast(locationKey));
  },[]);
  async function getLocationKey(city) {
    const response=await fetch(`http://localhost:3000/api/city?q=${city}`);
    const data = await response.json();
    return data[0]["Key"];
  }

  async function getCurrTemp(locationKey) {
    const response=await fetch(`http://localhost:3000/api/currentForecast?locationKey=${locationKey}`);
    const data = await response.json();
    return data[0]["Temperature"]["Metric"]["Value"];
  }

  async function getTwelveHourForecast(locationKey) {
    const response=await fetch(`http://localhost:3000/api/twelveHoursForecast?locationKey=${locationKey}`);
    const data = await response.json();
    return data;
  }
  async function getFiveDaysForecast(locationKey) {
    const response=await fetch(`http://localhost:3000/api/fiveDayForecast?locationKey=${locationKey}`);
    const data = await response.json();
    return data;
  }
  return (
   <div className="bg-gray-900 p-6 h-screen ">
      <SearchBar />
      <div className=" flex flex-row h-[90%] w-[100%]">
        <NavigationMenu />
        <div className="ml-8 w-[75%]">
          <CurrentTemp />
          <TodaysWeather />
        </div>
        <FiveDaysTemp></FiveDaysTemp>
      </div>
      
   </div>
  );
}
