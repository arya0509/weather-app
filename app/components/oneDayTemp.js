import cloud from '../res/cloud.png';
export default function OneDayTemp(params) {
    const{maxTemp, minTemp, time} = params;
    return(
        <div className='flex flex-row items-center justify-between px-2 border-b-2 h-24'> 
            <h3 className="font-bold">{time}</h3>
            <img src={cloud.src} alt="cloud" className="h-15 w-10"></img>
            <h3 className="font-bold">{maxTemp}/{minTemp} C</h3>
        </div>
    )
}