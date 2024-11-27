const apiKey=process.env.ACCUWEATHER_API_KEY;

export async function GET(req,res){
    try{
        const url=new URL(req.url);
        const locationKey=url.searchParams.get("locationKey");
        
        const response=await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}`);
        if(response.ok){
            const data=await response.json();
            return new Response(JSON.stringify(data),{status:response.status})
        }
        else{
            return new Response(JSON.stringify({message:"Could not retrieve the cities. Please try again later"}),{status:response.status})
            }
    }catch{
        console.log(`Error message: ${error}`)
        return new Response(JSON.stringify("error",{status:404}))
    }
}