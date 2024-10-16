import { useEffect, useState } from "react";

import { getCurrentWeather } from "../utilites/getWeather.js";

const Weather = () => {
    const [ weather, setWeather ] = useState('');
    const [ temperature, setTemperature ] = useState(0);

    useEffect(() => {
        const updateWeather = (position) => {
            getCurrentWeather(position)
                .then((data) => {
                    setWeather(data.weather);
                    setTemperature(Math.round(data.temperature));
                })
                .catch((err) => console.log(err));
        };

        const handleGeolocationPermission = async () => {
            const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });

            navigator.geolocation.getCurrentPosition(
                updateWeather,
                () => updateWeather()
            );
            permissionStatus.onchange = () => {
                if (permissionStatus.state === 'granted') {
                    navigator.geolocation.getCurrentPosition(updateWeather);
                } else {
                    updateWeather();
                }
            };
        }

        handleGeolocationPermission();
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