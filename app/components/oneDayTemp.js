import cloud from '../res/cloud.png';
import partlyCloudy from '../res/partlyCloudy.png';
import raining from '../res/raining.png';
import snow from '../res/snow.png';
import sun from '../res/sun.png';
import wind from '../res/wind.png';
export default function OneDayTemp(params) {
    function convertToCelsius(fahrenheit) {
        return Math.round((fahrenheit - 32) * 5 / 9);
    }
    let shorten = (day) => {
        if(day === 'Saturday') return 'Sat';
        if(day === 'Sunday') return 'Sun';
        if(day === 'Monday') return 'Mon';
        if(day === 'Tuesday') return 'Tue';
        if(day === 'Wednesday') return 'Wed';
        if(day === 'Thursday') return 'Thu';
        if(day === 'Friday') return 'Fri';
    }
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
    const{maxTemp, minTemp, time,iconPhrase} = params;
    const icon=getIconType(iconPhrase);
    return(
        <div className='flex flex-row items-center justify-between px-2 border-b-2 h-24'> 
            <h3 className="font-bold">{shorten(time)}</h3>
            <img src={icon.src} alt="cloud" className="h-15 w-10"></img>
            <h3 className="font-bold">{convertToCelsius(maxTemp)}/{convertToCelsius(minTemp)} C</h3>
        </div>
    )
}