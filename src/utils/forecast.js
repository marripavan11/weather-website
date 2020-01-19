const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/b7f660d3bcaef72ff756f5335204fded/'+lat+','+long+'?units=si&lang=en';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect Dark Sky Server', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            const temp = body.currently.temperature
            const rain = body.currently.precipProbability
            const today = body.daily.data[0].summary
            callback(undefined, today + ' It is currently ' + temp + ' degrees out. There is ' + rain + '% chance of rain.')
        }
    });
}

module.exports = forecast