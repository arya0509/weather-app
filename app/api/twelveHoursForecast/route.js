const apiKey=process.env.API_KEY;

export async function GET(req,res){
    try{
        const url=new URL(req.url);
        const q=url.searchParams.get("q");
        console.log(q);
        const response=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=1&aqi=no&alerts=no`);
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