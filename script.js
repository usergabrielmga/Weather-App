// apikey	fea900e1115bde66bfe67523d59781f6

let apiKey = 'fea900e1115bde66bfe67523d59781f6'
let apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

let btnLoad = document.getElementById('btn-load')

function descriptionClimate(i) {
    receivercClimate = document.getElementById('climate').innerHTML = i
}

async function getAlltemp(c) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${apiKey}`)
    console.log(response)
        
    if(response.ok == true) {
        showInfo = document.getElementById('info-tempField').style.display = 'block'
        showContainer = document.getElementById('container').style.height = '480px'
    } else {
        showError = document.getElementById('city-error').style.display = 'flex'
    }
    
    let tempData = await response.json()
    console.log(tempData)
    let city = tempData.name
    let temperature = parseInt(tempData.main.temp)
    let climate = tempData.weather[0].description
    let moisture = tempData.main.humidity
    let wind = tempData.wind.speed
    let resultado = temperature.toString()

    descriptionClimate(climate)
    
    let receiverCity = document.getElementById('receiver-city').innerHTML = city
    receiverTemperature = document.getElementById('receiver-temperature').innerHTML = resultado.substr(0,2) + '&degC'
    receiverIcon = document.getElementById('icon').setAttribute("src", `https://openweathermap.org/img/wn/${tempData.weather[0].icon}.png`)
    receiverMoisture = document.getElementById('receiver-moisture').innerHTML = moisture + '%'
    receiverWind = document.getElementById('receiver-wind').innerHTML = wind + ' Km/h'

    h3Font(city)
}

let h3Font = (x) => {
    let cityFont = document.getElementById('receiver-city')
    if(x.length >= 10) {
        cityFont.style.fontSize = '25px'
    } else {
        cityFont.style.fontSize = '32px'
    }
}

function closeError() {
    let close = document.getElementById('city-error').style.display = 'none'
}

closeError()

let filterLoad = () => {
    let inputCity = document.getElementById('input-city')
    let city = inputCity.value
    getAlltemp(city)
}

document.addEventListener("keypress", function(t) {
    if(t.key === 'Enter') {
        filterLoad()
    }
})

let search = () => {
    filterLoad()
}




