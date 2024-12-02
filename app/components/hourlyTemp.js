import cloud from '../res/cloud.png';

export default function HourlyTemp(params) {
    const {time, temp} = params;
    return(
        <div className="w-24 mx-6 flex flex-col border-r-2 ">
            <h3 className='font-bold'>{time}</h3>
            <img src={cloud.src} alt="cloud" className="h-15 w-10"></img>
            <h3 className='font-bold'>{temp}°C</h3>
        </div>
    )
}