import { useEffect, useState } from "react";

import getWeather from "../utilites/getWeather.js";

const Weather = () => {
    const [ weather, setWeather ] = useState('');
    const [ temperature, setTemperature ] = useState(0);

    useEffect(() => {
        getWeather.then(data => {
            setWeather(data.weather);
            setTemperature(Math.round(data.temperature))
        });
    }, []);

    return (
        <div className="weather-block">
            <div className="weather-box">
                <div className="current-icon">
                    <img src={`https://cdn.weatherbit.io/static/img/icons/${weather.icon}.png`}></img>
                </div>
                <div className="current-temp"> {`${temperature}°`} </div>
            </div>
            <span data-v-d3cfad54="" data-test="app-dash-label" className="app-dash-icon-label u--mobile-hide"> {window.localStorage.getItem('city')} </span>
        </div>
    )
}

export default Weather;