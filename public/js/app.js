console.log("This js file will get loaded in the client side")

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//         response.json().then((data) => {
//             console.log(data)
//         })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.getElementById('message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''
    const searchValue = search.value

    fetch('/weather?address='+searchValue).then((response) => {
    response.json().then( data => {
        if(data.error) {
            console.log(data.error)
            messageOne.textContent = data.error;
            messageTwo.textContent = ''
        } else {
            console.log(data.location)
            console.log(data.forecast)
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            
        }
    })
})
})