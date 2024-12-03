'use client';
import { useState } from "react";
import cloud from '../res/cloud.png';
import partlyCloudy from '../res/partlyCloudy.png';
import raining from '../res/raining.png';
import snow from '../res/snow.png';
import sun from '../res/sun.png';
import wind from '../res/wind.png';
export default function HourlyTemp(params) {
    const {time, temp,hourlyIconPhrases} = params;
    const iconPhrase = hourlyIconPhrases;
    function getIconType(iconPhrase){
        if(iconPhrase.includes('Partly Cloudy')||iconPhrase.includes('Mostly Cloudy')||iconPhrase.includes('Intermittent clouds')){
            return partlyCloudy;

        }
        else if(iconPhrase.includes('Cloud')){
            return cloud;
        }
        else if(iconPhrase.includes('Rain')){
            return raining;
        }
        else if(iconPhrase.includes('Snow')){
            return snow;
        }
        else if(iconPhrase.includes('Sun')){
            return sun;
        }
        else if(iconPhrase.includes('Wind')){
            return wind;
        }
       
    }
    const icon=getIconType(iconPhrase);
    return(
        <div className="w-24 mx-6 flex flex-col border-r-2 ">
            <h3 className='font-bold'>{time}:00</h3>
            <img src={icon.src} alt="cloud" className="h-15 w-10"></img>
            <h3 className='font-bold'>{temp}°C</h3>
        </div>
    )
}