'use client';
import { useState } from "react";
import SearchBar from "../components/searchBar";
import NavigationMenu from "../components/navigationMenu";
import Results from "../components/results";
import Home from "../page";
export default function Page() {
    const [city, setCity] = useState("");
    const [clicked, setClicked] = useState(false);
    const handleClicked = (city) => {
        setCity(city);
        setClicked(true);
    }
    return (
        <div>
           
                {clicked ? 
                <div>
                    <Home city={city} /> 
                </div>
           
            :
        <div className="bg-gray-900 p-6 h-screen overflow-hidden">
           <SearchBar />
           <div className="h-full flex">
                <NavigationMenu />
                <Results handleClicked={handleClicked} />
           </div>
        </div>
            }
        </div>
    );
}