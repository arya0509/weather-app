import HourlyTemp from "./hourlyTemp"
export default function TodaysWeather() {
    const hourlyTemps = [5,6,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const hourlyTimes = ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','00:00','01:00','02:00','03:00'];
    return(
        <div className="bg-slate-800 w-[90%] h-48 overflow-hidden overflow-x-visible ">
            <h2 className="text-white font-extrabold m-3 mt-0">Today&apos;s Weather</h2>
            <div className="flex flex-row mt-5">
                {
                    hourlyTemps.map((temp,index) => {
                        return(
                            <div key={index} >
                                <HourlyTemp time={hourlyTimes[index]} temp={temp}></HourlyTemp>
                            </div>
                        )

                    })
                }
            </div>
           
        </div>
    )
}