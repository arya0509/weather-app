import OneDayTemp from "./oneDayTemp"
export default function FiveDaysTemp(params) {
    const fiveDaysForecast = params.fiveDaysForecast;
    const dailyMaxTemps = fiveDaysForecast.map(day => day["Temperature"]["Maximum"]["Value"]);
    const dailyMinTemps = fiveDaysForecast.map(day => day["Temperature"]["Minimum"]["Value"]);
    const iconPhrases = fiveDaysForecast.map(day => day["Day"]["IconPhrase"]);
    const d = new Date();
    let day = d.getDay();
    const dailyTimes = fiveDaysForecast.map(() => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (day === 7) {
            day = 0;
        }
        return days[day++];
    });
    return (
        <div className="mt-3 bg-slate-800 h-full w-[30%] flex flex-col justify-center  rounded-md">
            <h2 className="font-bold m-3">Forecast for the next 5 days</h2>
            {
                dailyMaxTemps.map((maxTemp,index) => {
                    return(
                        <div key={index} className="px-2">
                            <OneDayTemp maxTemp={maxTemp} minTemp={dailyMinTemps[index]} time={dailyTimes[index]} iconPhrase={iconPhrases[index]}></OneDayTemp>
                        </div>
                    )
                })
            }
        </div>
    )
}