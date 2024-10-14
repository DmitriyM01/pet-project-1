export default new Promise((resolve) => {
    return navigator.geolocation.getCurrentPosition(async function (position) {
        //  https://dadata.ru/api/geolocate/

        const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
        const token = "275498e8c188299bb1ae0dcc5d32a3e58501ecf8";
        // const query = { lat: position.coords.latitude, lon: position.coords.longitude, language: 'ru', count: 1 };
        const query = { lat: 56.0183900, lon: 92.8671700, count: 1 };

        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(query)
        }

        await fetch(url, options)
            .then(response => response.text())
            .then((result) => {
                resolve(JSON.parse(result).suggestions[0].data.city);
            })
            .catch(error => console.log("error", error));
    });
})
