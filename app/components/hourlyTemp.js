'use client';
import { useState } from "react";

export default function HourlyTemp(params) {
    const {time, temp,hourlyIconPhrases} = params;
    const iconPhrase = hourlyIconPhrases;
    function getIconType(iconPhrase){
        if(iconPhrase.includes('Partly Cloudy')||iconPhrase.includes('Mostly Cloudy')||iconPhrase.includes('Intermittent clouds')){
            return  '/res/partlyCloudy.png';;

        }
        else if(iconPhrase.includes('Cloud')){
            return '/res/cloud.png';
        }
        else if(iconPhrase.includes('Rain')){
            return '/res/raining.png';
        }
        else if(iconPhrase.includes('Snow')){
            return '/res/snow.png';
        }
        else if(iconPhrase.includes('Sun')){
            return '/res/sun.png';
        }
        else if(iconPhrase.includes('Wind')){
            return '/res/wind.png';
        }
        else{
            return '/res/partlyCloudy.png';
        }
       
    }

    const icon=getIconType(iconPhrase);
    console.log(icon);
    if(!icon){
        console.log('icon not found');
    }
    return(
        <div className="w-24 mx-6 flex flex-col border-r-2 ">
            <h3 className='font-bold'>{time}:00</h3>
            <img src={icon} alt="weatherIcon" className="h-15 w-10"></img>
            <h3 className='font-bold'>{temp}°C</h3>
        </div>
    )
}