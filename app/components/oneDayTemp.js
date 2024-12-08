
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
            return '/res/partlyCloudy.png';

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
       
    }
    const{maxTemp, minTemp, time,iconPhrase} = params;
    const icon=getIconType(iconPhrase);
    return(
        <div className='flex flex-row items-center justify-between px-2 border-b-2 h-24'> 
            <h3 className="font-bold">{shorten(time)}</h3>
            <img src={icon} alt="weatherIcon" className="h-15 w-10"></img>
            <h3 className="font-bold">{convertToCelsius(maxTemp)}°/{convertToCelsius(minTemp)}° C</h3>
        </div>
    )
}