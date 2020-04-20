showPosition = (position) => {

    const url ='http://localhost:3000/weather/location?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude

    fetch(url).then((response) => {

        response.json().then((data) => {

            if(data.error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })

    })
}

getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
}

getLocation()

fetch('http://localhost:3000/weather?address=london').then((response) => {

    response.json().then((data) => {

        if(data.error) {
            console.log(error)
        } else {
            console.log(data)
        }
    })

})

