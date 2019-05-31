const { argv } = require('./config/yargs.config');
const locations = require('./location/location');
const weather = require('./weather/weather');

const location = argv.direction;

const getInfo = async(location) => {
    const latLon = await locations.getLocationLatLong(location);
    return weather.getWeatherLatLong(latLon.lat, latLon.lon);
}

getInfo(location).then(weather => console.log(`Temperature obtained for ${location}:`, weather)).catch(err => console.log(err));