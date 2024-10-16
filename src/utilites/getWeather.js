export const getCurrentWeather = (coords) => {
    const position = coords
    ? { lat: coords.coords.latitude, lon: coords.coords.longitude }
    : { lat: 56.0183900, lon: 92.8671700 };

    const baseUrl = "https://api.weatherbit.io/v2.0/";
    const token = "ef2f257f27eb4b40890a362f1ac2e45f";
    const url = baseUrl + `current?lat=${position.lat}&lon=${position.lon}` + `&key=${token}`

    return fetch(url)
        .then(response => response.text())
        .then((result) => {
            const data = JSON.parse(result).data[0];
            window.localStorage.setItem('city', data.city_name)
            return {
                temperature: data.temp,
                weather: data.weather,
            };
        })
}
