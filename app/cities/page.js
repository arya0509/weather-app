'use client';
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import SearchBar from "../components/searchBar";
import NavigationMenu from "../components/navigationMenu";
import Results from "../components/results";
import Home from "../page";
export default function Page() {
    const router = useRouter();
   const [topCities, setTopCities] = useState();
    const [city, setCity] = useState("");
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if(router.query.topCities) {
            try {
                setTopCities(JSON.parse(router.query.topCities));
            } catch (error) {
                console.error("Failed to parse topCities:", error);
            }
        }
    }, [router.query.topCities]);
    const handleClicked = (city) => {
        setCity(city);
        setClicked(true);
    }
    if (!topCities) {
        return <p>Loading...</p>; 
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
                <NavigationMenu handleCityChange={handleClicked} />
                <Results topCities={topCities} handleClicked={handleClicked} />
           </div>
        </div>
            }
        </div>
    );
}