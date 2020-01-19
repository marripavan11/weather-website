const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const staticPagePath = path.join(__dirname, '../public')
const partials = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
app.use(express.static(staticPagePath))

hbs.registerPartials(partials)

app.get('', (request, response) => {
    response.render('index', {
        title: 'A Weather App',
        name: 'Pavan Marri'
    })
})

// app.get('', (request, response) => {
//     response.send("Hello")
// })



app.get('/about', (request, response) => {
    response.render('about', {
        title: 'About Page',
        name: 'Pavan Marri'
    })
})

app.get('/help', (request, response) => {
    response.render('help', {
        title: 'Help Page',
        name: 'Pavan Marri'
    })
})

app.get('/weather', (request, response) => {

    if(!request.query.address) {
        return response.send({
            error: 'Address is mandatory field.'
        })  
    }

    geocode(request.query.address, (error, {longitude, latitude, location} = {}) => {
        if(error) {
            return response.send({ error })
        }
        forecast(longitude, latitude, (error, forecastData ) => {
            if(error) {
                return response.send({error})
            }

            return response.send( {
                forecast : forecastData,
                location,
                address: request.query.address
            })
        })
    }) 
    
})

app.get('/view-weather', (request, response) => {

    response.send({
        temp: '22 ^C',
        rain: 0
    })
})

app.get('*', (request, response) => {
    response.render("404", {
        title : "404 Page",
        name : "Pavan Marri"
    })
})

app.listen(3000, () => {
    console.log('Server is UP and running.')
})