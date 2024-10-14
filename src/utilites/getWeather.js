export default new Promise((resolve) => {
    return navigator.geolocation.getCurrentPosition(async function (position) {
        const baseUrl = "https://api.weatherbit.io/v2.0/";
        const token = "ef2f257f27eb4b40890a362f1ac2e45f";
        const query = { lat: position.coords.latitude, lon: position.coords.longitude, language: 'ru', count: 1 };
        // const query = { lat: 56.0183900, lon: 92.8671700 };
        const url = baseUrl + `current?lat=${ query.lat }&lon=${ query.lon }` + `&key=${token}`


        await fetch(url)
            .then(response => response.text())
            .then((result) => {
                const data = JSON.parse(result).data[0];
                resolve({
                    temperature: data.temp,
                    weather: data.weather,
                 });
            })
            .catch(error => console.log("error", error));

    });

})

