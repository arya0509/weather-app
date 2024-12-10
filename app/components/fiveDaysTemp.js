'use client';
import { useState } from "react";
import OneDayTemp from "./oneDayTemp"
export default function FiveDaysTemp(params) {
    const fiveDaysForecast = params.fiveDaysForecast;
    const buttonPressed = params.buttonPressed;
    const dailyMaxTemps = []
    const dailyMinTemps = []
    const iconPhrases = []
    const dates=[]
    const [twelveHourForecast, setTwelveHourForecast] = useState([]);
    fiveDaysForecast.forecastday.forEach((day) => {
        dailyMaxTemps.push(day.day.maxtemp_c);
        dailyMinTemps.push(day.day.mintemp_c);
        iconPhrases.push(day.day.condition.icon);
        twelveHourForecast.push(day.hour);
        dates.push(day.date);
        
    }
    );
    function buttonClicked(index){
        buttonPressed(twelveHourForecast[index],dates[index]);
    }
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    

    const dailyDays = fiveDaysForecast.forecastday.map((day) => {
      const dateParts = day.date.split('-');
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // JS months are 0-based
      const dayOfMonth = parseInt(dateParts[2], 10);
    
      console.log('Raw date string:', day.date);
      console.log('Parsed date parts:', { year, month, dayOfMonth });
    
      const date = new Date(Date.UTC(year, month, dayOfMonth));
      const dayOfWeek = date.getUTCDay();
      if(dayOfWeek === 6) {
        return days[0];
      }     
      return days[date.getUTCDay()];
    });
    return (
        <div className="mt-3 bg-slate-800 h-full w-[30%] flex flex-col justify-center  rounded-md">
            <h2 className="font-bold m-3">Forecast for the next 5 days</h2>
            {
                dailyMaxTemps.map((maxTemp,index) => {
                    return(
                        <div key={index} className="px-2">
                            <button className="h-full w-full" onClick={()=>buttonClicked(index)}>
                                <OneDayTemp maxTemp={maxTemp} minTemp={dailyMinTemps[index]} time={dailyDays[index]} iconPhrase={iconPhrases[index]}></OneDayTemp>
                             </button>
                        </div>
                    )
                })
            }
        </div>
    )
}