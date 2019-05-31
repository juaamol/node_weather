const axios = require('axios');
const secretdata = require('../secretdata/secretdata');

const getWeatherLatLong = async(lat, lon) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${secretdata.ApiKeyWeather}&units=metric`,
    });

    let resp = { data: { Results: [] } };
    try {
        resp = await instance.get();
    } catch (error) {
        throw new Error(`Error getting weather for lat=${lat}, lon=${lon}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getWeatherLatLong,
}