'use client';
import { useState } from "react";
import HourlyTemp from "./hourlyTemp"
export default function TodaysWeather(params) {
   const twelveHourForecast = params.twelveHourForecast;
   const hourlyTemps = [];
    const hourlyTimes = [];
    const hourlyIcons = [];
    for(let i=0;i<24;i++){
        hourlyTemps.push(twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["temp_c"]);
        hourlyTimes.push(twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["time"].slice(11,16));
        hourlyIcons.push(twelveHourForecast["forecast"]["forecastday"][0]["hour"][i]["condition"]["icon"]);
    }
    return(
        <div className="bg-slate-800 w-[90%] h-48 overflow-hidden overflow-x-visible ">
            <h2 className="text-white font-extrabold m-3 mt-0">Today&apos;s Weather</h2>
            <div className="flex flex-row mt-5">
                {
                    hourlyTemps.map((temp,index) => {
                        return(
                            <div key={index} >
                                <HourlyTemp time={hourlyTimes[index]} temp={temp} hourlyIconPhrases={hourlyIcons[index]}></HourlyTemp>
                            </div>
                        )

                    })
                }
            </div>
           
        </div>
    )
}