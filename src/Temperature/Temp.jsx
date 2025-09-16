import { useState } from "react";

function Temp(props) {
    const setTempDataContext = props.setTempDataContext;
    const [cityName, setCityName] = useState("");
    async function getTemp(city) {
        const apiKey = import.meta.env.VITE_OPEN_WEATHERKEY
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        try{
            const response = await fetch(URL);
            const data = await response.json();
            setTempDataContext(data);
        } catch(err) {
            console.log(err);
        }
    }
    return (<>
        <input type="text"
               placeholder="Enter a city name"
               value={cityName}
               onChange={(e) => setCityName(e.target.value)} />
        
        <button
        onClick={() => getTemp(cityName)}>
            Enter
        </button>
    </>)
}

export default Temp;