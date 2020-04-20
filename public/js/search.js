searchLocation = ( location , callback) => {

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            callback(data)
        })
    })
}

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')

//if not type button change click for submit as eventlistener
//e = event
weatherForm.addEventListener('click', (e) => {
    
    //prevent reload browser for submit action
    //e.preventDefault()

    const location = searchInput.value

    searchLocation( location, (data) => {

        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data)
        }

    })

})
