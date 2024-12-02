import OneDayTemp from "./oneDayTemp"
export default function FiveDaysTemp() {
    const dailyMaxTemps = [5,6,2,3,4];
    const dailyMinTemps = [1,2,0,1,2];
    const dailyTimes = ['Tod','Tue','Wed','Thu','Fri'];
    return (
        <div className="mt-3 bg-slate-800 h-full w-[30%] flex flex-col justify-center  rounded-md">
            <h2 className="font-bold m-3">Forecast for the next 5 days</h2>
            {
                dailyMaxTemps.map((maxTemp,index) => {
                    return(
                        <div key={index} className="px-2">
                            <OneDayTemp maxTemp={maxTemp} minTemp={dailyMinTemps[index]} time={dailyTimes[index]}></OneDayTemp>
                        </div>
                    )
                })
            }
        </div>
    )
}