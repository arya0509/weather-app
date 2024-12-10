'use client';
import { useState } from "react";
import HourlyTemp from "./hourlyTemp"
export default function TodaysWeather(params) {
   const twelveHourForecast = params.twelveHourForecast;
   const additionalInfoClicked=params.additionalInfoClicked;
   const otherDate = params.otherDate;
   const hourlyTemps = [];
    const hourlyTimes = [];
    const hourlyIcons = [];
    const additionalInfo=[];
    for(let i=0;i<24;i++){
        hourlyTemps.push(twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["temp_c"]);
        hourlyTimes.push(twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["time"].slice(11,16));
        hourlyIcons.push(twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["condition"]["icon"]);
        additionalInfo.push({wind_kph:twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["wind_kph"],humidity:twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["humidity"],pressure_mb:twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["pressure_mb"],feelsLike_c:twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["feelslike_c"]}); 
    }
    function buttonPressed(index){
        additionalInfoClicked(additionalInfo[index],hourlyTimes[index]);
    }
    return(
        <div className="bg-slate-800 w-[90%] h-48 overflow-hidden overflow-x-visible scrollbar-custom">
            {otherDate?<h2 className="text-white font-extrabold m-3 mt-0">Weather for {otherDate}</h2>:
            <h2 className="text-white font-extrabold m-3 mt-0">Today&apos;s Weather</h2>
        }
            <div className="flex flex-row mt-5">
                {
                    hourlyTemps.map((temp,index) => {
                        return(
                            <button key={index} onClick={()=>buttonPressed(index)}>
                                <div  className="hover:border-2 border-r-2" >
                                    <HourlyTemp time={hourlyTimes[index]} temp={temp} hourlyIconPhrases={hourlyIcons[index]}></HourlyTemp>
                                </div>
                            </button>
                        )

                    })
                }
            </div>
           
        </div>
    )
}