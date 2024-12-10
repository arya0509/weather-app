'use client';
import { useState } from "react";

export default function HourlyTemp(params) {
    const {time, temp,hourlyIconPhrases} = params;
    
    return(
        <div className="w-24 mx-6 flex flex-col   ">
            <h3 className='font-bold'>{time}:00</h3>
            <img src={hourlyIconPhrases} alt="weatherIcon" className="h-15 w-10"></img>
            <h3 className='font-bold'>{temp}°C</h3>
        </div>
    )
}