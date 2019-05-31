const { argv } = require('./config/yargs.config');
const axios = require('axios');

const location = argv.direction;
const encodedUrl = encodeURI(location);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    timeout: 1000,
    headers: {
        'X-RapidAPI-Key': '6b26965d72mshff2819c670e7250p128608jsnc728442d15a0',
        'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
    },
});


instance.get().then(resp => console.log(resp.data.Results[1])).catch(err => console.log('Error:', err));