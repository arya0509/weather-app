'use client';
import { useState } from "react";
import HourlyTemp from "./hourlyTemp"
export default function TodaysWeather(params) {
   const twelveHourForecast = params.twelveHourForecast;
   const hourlyTemps = [];
    const hourlyTimes = [];
    const hourlyIconPhrases = [];
    twelveHourForecast.forEach((hourlyForecast) => {
        hourlyTemps.push(convertTocClesius(hourlyForecast["Temperature"]["Value"]));
        hourlyTimes.push(hourlyForecast["DateTime"].split("T")[1].split(":")[0]);
        hourlyIconPhrases.push(hourlyForecast["IconPhrase"]);
    });
    function convertTocClesius(fahrenheit) {
        return Math.round((fahrenheit - 32) * 5 / 9);
    }
    return(
        <div className="bg-slate-800 w-[90%] h-48 overflow-hidden overflow-x-visible ">
            <h2 className="text-white font-extrabold m-3 mt-0">Today&apos;s Weather</h2>
            <div className="flex flex-row mt-5">
                {
                    hourlyTemps.map((temp,index) => {
                        return(
                            <div key={index} >
                                <HourlyTemp time={hourlyTimes[index]} temp={temp} hourlyIconPhrases={hourlyIconPhrases[index]}></HourlyTemp>
                            </div>
                        )

                    })
                }
            </div>
           
        </div>
    )
}