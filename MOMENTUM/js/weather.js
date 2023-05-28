function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "bafc3f7585049591c4f747cf6eb0fc58"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url).then(Response => Response.json().then(data => {
        const temp = document.querySelector("#weather span:first-child");
        const weatherAndCity = document.querySelector("#weather span:last-child")
        const temp2 = (data.main.temp-273.15)
        const temp3 = temp2.toFixed(1);
        temp.innerText = `${temp3}°C`;
        weatherAndCity.innerText = `${data.weather[0].main} / ${data.name}`;
        
        
    }));


}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
