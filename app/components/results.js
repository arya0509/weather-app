'use client';
import Home from "../page";
import { useState } from "react";

export default function Results(props) {
    const handleClicked = props.handleClicked;
    const results = props.topCities;
    const [clicked, setClicked] = useState(false);
    const [city, setCity] = useState("");
    // const results = [
    //     {city: "New York", country:{EnglishName:"United States"}},
    //     {city: "Los Angeles", country:{EnglishName:"United States"}},
    //     {city: "Chicago", country:{EnglishName:"United States"}},
    //     {city: "Houston", country:{EnglishName:"United States"}},
    //     {city:"Calgary", country:{EnglishName:"Canada"}},
    //     {city:"Toronto", country:{EnglishName:"Canada"}},
    //     {city:"Delhi", country:{EnglishName:"India"}},
    //     {city:"Mumbai", country:{EnglishName:"India"}},
    //     {city:"Shanghai", country:{EnglishName:"China"}},
    //     {city:"Beijing", country:{EnglishName:"China"}},
    //     {city:"London", country:{EnglishName:"United Kingdom"}},
    //     {city:"Manchester", country:{EnglishName:"United Kingdom"}},
    // ];
    const handleClick = (city) => {
       handleClicked(city);
       
    };
    return (
        <div className="h-full w-full">
        {clicked ? <Home city={city}  /> : 
        <div className="p-6 h-[90%] w-full mt-8 ml-4">

            <div className="h-full overflow-hidden overflow-y-auto">
                {
                    results.map((result, index) => (
                        <div key={index} className=" flex justify-between items-center border-b border-gray-700 py-4 hover:bg-slate-800">
                            <button className="  h-full w-full" onClick={() => handleClick(result.EnglishName)}>
                                <div className="flex items-center">
                                    <h2 className="text-xl ml-4">{result.EnglishName}</h2>
                                </div>
                            </button>
                           
                        </div>
                    ))
                }
                
            </div>
        </div>
        }
        </div>
    );
}