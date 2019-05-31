const argv = require('yargs')
    .options({
        direction: {
            alias: 'd',
            desc: 'Direction of the city you want to obtain the weather for',
            demand: true,
        }
    }).argv;

module.exports = {
    argv,
}