const searchTemperature = () =>{
    const city = document.getElementById('city-name').value
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f2bf1c51b5df7f79fa006c4343360ca&units=metric`

    fetch(api_url)
    .then(res=>res.json())
    .then(data=>getTemperature(data))
}

const displayText = (id,text) => {
    document.getElementById(id).innerText = text
}
const getTemperature = temperature => {
    console.log(temperature)
    displayText('city',temperature.name)
    displayText('wind',temperature.weather[0].main)
    displayText('temperature',temperature.main.temp)

}