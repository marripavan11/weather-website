const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWFycmlwYXZhbiIsImEiOiJjazRqbGR2ZWMwZnlmM2tuc2QxYjdleXpzIn0.hTPB69JUnIur7-OkDYp39g&limit=10'
    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect the Map box Service...!', undefined)
        } else if (body.message) {
            callback(body.message, undefined)
        } else if (body.features.length === 0) {
            callback('Map box could not find the place', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name,
            })
        }
    });
}

module.exports = geocode