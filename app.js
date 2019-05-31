const { argv } = require('./config/yargs.config');
const locations = require('./location/location');


const location = argv.direction;

locations.getLocationLatLong(location).then(res => console.log(res)).catch(err => console.log(err));