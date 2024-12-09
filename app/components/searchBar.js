'use client';
import { useState } from "react";
export default function SearchBar(props) {
    const [value, setValue] = useState("");
    const handleCityChange = (e) => {
        if(e.key === "Enter"){
         
            props.handleCityChange(e.target.value);
        }
    }
    return(
        <div className=" h-12  flex justify-center items-center" onKeyDown={(e)=>handleCityChange(e)}>
            <input value={value} onChange={(e)=>setValue(e.target.value)} className=" p-3 h-12 w-3/4 bg-slate-800 rounded-lg text-sky-200" placeholder="Search for cities and press enter"></input>
        </div>
    )
}