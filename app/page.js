'use client';
import { useEffect } from "react";
import { useState,useContext } from "react";
import SearchBar from "./components/searchBar";
import NavigationMenu from "./components/navigationMenu";
import CurrentTemp from "./components/currentTemp";
import TodaysWeather from "./components/todaysWeather";
import FiveDaysTemp from "./components/fiveDaysTemp";
import PopUp from "./components/popUp";
export default function Home() {
  const [city, setCity] = useState("");
  const [currTemp, setCurrTemp] = useState("");
  const [twelveHourForecast, setTwelveHourForecast] = useState();
  const [fiveDaysForecast, setFiveDaysForecast] = useState();
  const [currWeatherIcon, setCurrWeatherIcon] = useState();
  const [additionalInfo, setAdditionalInfo] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const [currDate, setCurrDate] = useState("");
  const [otherDate, setOtherDate] = useState("");
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
    setCurrDate(data.current?.last_updated.split(" ")[0]);
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
  function additionalInfoClicked(info,time){
    setAdditionalInfo({info:info,time:time});
    setOpenPopup(true);
  }
  
  function handleCityChange(city) {
    setCity(city);
  }
  function anotherDayClicked(twelveHourForecast,date) {
    setOtherDate(date);
    setTwelveHourForecast({"forecast":
      {"forecastday":[
        {"hour":twelveHourForecast}
      ]}
      });

  }
  // uncomment this if the api is working
  if (!currTemp || !twelveHourForecast || !fiveDaysForecast) {
    
    return (
    <div>Loading...
      
    </div>);  
  }
  
  return (
   <div className="bg-gray-900 p-6 h-screen">
      <SearchBar handleCityChange={handleCityChange} />
      <div className=" flex flex-row h-[90%] w-[100%]">
        <NavigationMenu />
        <div className="ml-8 w-[75%]">
          <CurrentTemp date={currDate} currWeatherIcon={currWeatherIcon} temp={currTemp} location={city=== "" ? "Calgary" : city} />
          <TodaysWeather otherDate={otherDate} additionalInfoClicked={additionalInfoClicked} twelveHourForecast={twelveHourForecast} />
        </div>
        <FiveDaysTemp buttonPressed={anotherDayClicked} fiveDaysForecast={fiveDaysForecast}></FiveDaysTemp>
        <>
          {openPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
             
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-[30%]">
                <PopUp additionalInfo={additionalInfo.info} hourlyTime={additionalInfo.time} />
                <button
                  onClick={() => setOpenPopup(false)}
                  className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      </div>
      
   </div>
  );
}
