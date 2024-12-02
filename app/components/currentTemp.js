'use client';
import { useState } from "react";
import cloud from '../res/cloud.png';
export default function CurrentTemp() {
    const [temp, setTemp] = useState(-8);
    const [location, setLocation] = useState('Calgary, AB');
    return(
        <div className="ml-6 flex justify-center items-center h-[70%] w-[80%]">
            <div className=" p-2 justify-center items-center  rounded-lg h-[90%] w-full">
                <div className="h-full flex justify-center items-center pb-20">
                    <div className="mr-16">
                        <h2 className="text-9xl">{temp}°C</h2>
                        <h3 className="text-2xl">{location}</h3>
                    </div>
                    <img src={cloud.src} alt="cloud" className="h-40 w-40"></img>
                </div>
            </div>
        </div>
    )

}