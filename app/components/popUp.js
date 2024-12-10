'use client';
import { useState } from "react";
export default function PopUp(params){
    const {additionalInfo,hourlyTime}=params;
    const [info,setInfo]=useState(additionalInfo);
    const [time,setTime]=useState(hourlyTime);
    return(
        <div className=" bg-slate-800 w-[95%] h-[70%]  ">
            <h2 className="text-white font-extrabold m-3 mt-0">Additional Information   Time: {time}    </h2>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col ">
                    <h3 className="text-white font-bold mx-2">Wind Speed: {info.wind_kph} km/h</h3>
                    <h3 className="text-white font-bold mx-2">Humidity: {info.humidity}%</h3>
                    
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white font-bold">Pressure: {info.pressure_mb} mb</h3>
                    <h3 className="text-white font-bold">Feels Like: {info.feelsLike_c}°C</h3>
                </div>
            </div>
            
        </div>
    );
}