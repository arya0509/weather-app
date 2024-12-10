'use client';
import { useEffect } from "react";
import { useState,useContext } from "react";
import SearchBar from "./components/searchBar";
import NavigationMenu from "./components/navigationMenu";
import CurrentTemp from "./components/currentTemp";
import TodaysWeather from "./components/todaysWeather";
import FiveDaysTemp from "./components/fiveDaysTemp";

export default function Home() {
  const [city, setCity] = useState("");
  const [currTemp, setCurrTemp] = useState("");
  const [twelveHourForecast, setTwelveHourForecast] = useState();
  const [fiveDaysForecast, setFiveDaysForecast] = useState();
  const [currWeatherIcon, setCurrWeatherIcon] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        
        const fetchedCurrTemp = await getCurrTemp(city=== "" ? "Calgary" : city);
        const fetchedTwelveHourForecast = await getTwelveHourForecast(city=== "" ? "Calgary" : city);
        const fetchedFiveDaysForecast = await getFiveDaysForecast(city=== "" ? "Calgary" : city);
       
        
  
        
        setCurrTemp(fetchedCurrTemp);
        setTwelveHourForecast(fetchedTwelveHourForecast);
        setFiveDaysForecast(fetchedFiveDaysForecast);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, [city]); 
  
  
  useEffect(() => {
   
  }, [currTemp, twelveHourForecast, fiveDaysForecast])
  
 

  

  async function getCurrTemp( city) {
    
    const response=await fetch(`http://localhost:3000/api/currentForecast?q=${city}`);
    const data = await response.json();

    setCurrWeatherIcon(data.current?.condition.icon);
    return data.current?.temp_c;
  }

  async function getTwelveHourForecast( city) {
    const response=await fetch(`http://localhost:3000/api/twelveHoursForecast?q=${city}`);
    const data = await response.json();
    return data;
  }
  async function getFiveDaysForecast(city ) {
    const response=await fetch(`http://localhost:3000/api/fiveDayForecast?q=${city}`);
    const data = await response.json();
    return data["forecast"];
  }
  
  function handleCityChange(city) {
    setCity(city);
  }
  // uncomment this if the api is working
  if (!currTemp || !twelveHourForecast || !fiveDaysForecast) {
    
    return (
    <div>Loading...
      
    </div>);  
  }
  return (
   <div className="bg-gray-900 p-6 h-screen ">
      <SearchBar handleCityChange={handleCityChange} />
      <div className=" flex flex-row h-[90%] w-[100%]">
        <NavigationMenu />
        <div className="ml-8 w-[75%]">
          <CurrentTemp currWeatherIcon={currWeatherIcon} temp={currTemp} location={city=== "" ? "Calgary" : city} />
          <TodaysWeather twelveHourForecast={twelveHourForecast} />
        </div>
        <FiveDaysTemp fiveDaysForecast={fiveDaysForecast}></FiveDaysTemp>
      </div>
      
   </div>
  );
}
