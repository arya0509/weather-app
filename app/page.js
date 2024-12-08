'use client';
import { useEffect } from "react";
import { useState,useContext } from "react";
import SearchBar from "./components/searchBar";
import NavigationMenu from "./components/navigationMenu";
import CurrentTemp from "./components/currentTemp";
import TodaysWeather from "./components/todaysWeather";
import FiveDaysTemp from "./components/fiveDaysTemp";
import fiveDays from "./tempData/fiveDays.json";
import twelveHours from "./tempData/twelveHours.json";
export default function Home(props) {
  const [city, setCity] = useState(props?.city || "Calgary");


  const [locationKey, setLocationKey] = useState("");
  const [currTemp, setCurrTemp] = useState("");
  const [twelveHourForecast, setTwelveHourForecast] = useState();
  const [fiveDaysForecast, setFiveDaysForecast] = useState();
  useEffect(() => {
    async function fetchData(){
    const fetchedLocationKey = await getLocationKey(city);
    const fetchedCurrTemp = await getCurrTemp(fetchedLocationKey); 
    const fetchedTwelveHourForecast = await getTwelveHourForecast(fetchedLocationKey);    
    const fetchedFiveDaysForecast = await getFiveDaysForecast(fetchedLocationKey);
   
    setLocationKey(fetchedLocationKey);
    setCurrTemp(fetchedCurrTemp);
    setTwelveHourForecast(fetchedTwelveHourForecast);
    setFiveDaysForecast(fetchedFiveDaysForecast);
    console.log(locationKey, currTemp, twelveHourForecast, fiveDaysForecast);
  }
  fetchData();
  }
  ,[]);


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
    return data["DailyForecasts"];
  }
  // uncomment this if the api is working
  if (!locationKey || !currTemp || !twelveHourForecast || !fiveDaysForecast) {
    return (
    <div>Loading...
      <p>Please note that if the loading is taking a long time, it  means the free calls for this API have been exhausted.</p>
      <p>I am using the free version of Accuweather API, which permits only 50 calls per day</p>
      <p>Therefore, please be patient enough and try again tomorrow</p>
    </div>);  
  }
  return (
   <div className="bg-gray-900 p-6 h-screen ">
      <SearchBar />
      <div className=" flex flex-row h-[90%] w-[100%]">
        <NavigationMenu />
        <div className="ml-8 w-[75%]">
          <CurrentTemp temp={currTemp} location={city} />
          <TodaysWeather twelveHourForecast={twelveHourForecast} />
        </div>
        <FiveDaysTemp fiveDaysForecast={fiveDaysForecast}></FiveDaysTemp>
      </div>
      
   </div>
  );
}
