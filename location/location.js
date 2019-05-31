const axios = require('axios');

const getLocationLatLong = async(location) => {
    const encodedUrl = encodeURI(location);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'X-RapidAPI-Key': '6b26965d72mshff2819c670e7250p128608jsnc728442d15a0',
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        },
    });

    let resp = { data: { Results: [] } };
    try {
        resp = await instance.get();
    } catch (error) {
        throw new Error(`Error getting data for ${location}`);
    }


    if (resp.data.Results.length === 0) {
        throw new Error(`There are no results for ${location}`);
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direction,
        lat,
        lon,
    }
}

module.exports = {
    getLocationLatLong,
}