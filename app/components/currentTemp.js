'use client';
import { useState } from "react";

export default function CurrentTemp(params) {
    const temp = params.temp;
    const location = params.location;
    const currWeatherIcon = params.currWeatherIcon;
    const[date,setDate] = useState(params.date);
    
    return(
        <div className="ml-6 flex justify-center items-center h-[70%] w-[80%]">
            <div className=" p-2 justify-center items-center  rounded-lg h-[90%] w-full">
                <div className="h-full flex justify-center items-center pb-20">
                    <div className="mr-16">
                        <h2 className="text-9xl">{temp}°C</h2>
                        <h3 className="text-2xl">{location}</h3>
                        <h3 className="text-2xl">{date}</h3>
                    </div>
                    <img src={currWeatherIcon} alt="cloud" className="h-40 w-40"></img>
                </div>
            </div>
        </div>
    )

}