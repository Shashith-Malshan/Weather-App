console.log("JS Loaded");

AOS.init();

let date = new Date();
console.log(date);

formatDate = {
    "weekday": `long`,
    "month": `long`,
    "year": `numeric`,
    "day": `numeric`
}

let currentDate = date.toLocaleDateString("en-US", formatDate);
// document.getElementById("date").innerText = currentDate;
console.log(currentDate);

let currentTime = date.toLocaleTimeString();
console.log(currentTime);

document.getElementById("local-date").innerText = currentDate;
document.getElementById("local-time").innerText = currentTime;

function callApi() {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=d183496ef2c04b47b9270328251308&q=${document.getElementById("txtsearch").value}&days=7&aqi=no&alerts=no`)

        .then(responce => responce.json())
        .then(data => {
            setDetails(data);
        });


}

function setDetails(data) {

    document.getElementById("city").innerText = data.location.name;
    document.getElementById("country").innerText = data.location.country;
    document.getElementById("condition-icon").src =  changeIcon(data.current.condition.icon);
    document.getElementById("condition").innerText = data.current.condition.text;
    document.getElementById("temp-c").innerText = data.current.temp_c;
    document.getElementById("temp-f").innerText = data.current.temp_f;
    document.getElementById("feels-like").innerText = data.current.feelslike_c;

    document.getElementById("wind-kph").innerText = data.current.wind_kph;
    document.getElementById("wind-mph").innerText = data.current.wind_mph;
    document.getElementById("humidity").innerText = data.current.humidity;
    document.getElementById("cloud-cover").innerText = data.current.cloud;
    document.getElementById("uv-index").innerText = data.current.uv;
    document.getElementById("pressure").innerText = data.current.pressure_mb;
    document.getElementById("visibility").innerText = data.current.vis_km;
    document.getElementById("wind-dir").innerText = data.current.wind_dir;
    document.getElementById("last-updated").innerText = data.current.last_updated;

    document.getElementById("hour-icon-1").src = changeIcon(data.forecast.forecastday[0].hour[13].condition.icon);
    document.getElementById("hour-cond-1").innerText = data.forecast.forecastday[0].hour[13].condition.text;
    document.getElementById("hour-temp-1").innerText = data.forecast.forecastday[0].hour[13].temp_c;

    document.getElementById("hour-icon-2").src =  changeIcon(data.forecast.forecastday[0].hour[14].condition.icon);
    document.getElementById("hour-cond-2").innerText = data.forecast.forecastday[0].hour[14].condition.text;
    document.getElementById("hour-temp-2").innerText = data.forecast.forecastday[0].hour[14].temp_c;

    document.getElementById("hour-icon-3").src =  changeIcon(data.forecast.forecastday[0].hour[15].condition.icon);
    document.getElementById("hour-cond-3").innerText = data.forecast.forecastday[0].hour[15].condition.text;
    document.getElementById("hour-temp-3").innerText = data.forecast.forecastday[0].hour[15].temp_c;

    document.getElementById("hour-icon-4").src =  changeIcon(data.forecast.forecastday[0].hour[16].condition.icon);
    document.getElementById("hour-cond-4").innerText = data.forecast.forecastday[0].hour[16].condition.text;
    document.getElementById("hour-temp-4").innerText = data.forecast.forecastday[0].hour[16].temp_c;

    document.getElementById("hour-icon-5").src =  changeIcon(data.forecast.forecastday[0].hour[17].condition.icon);
    document.getElementById("hour-cond-5").innerText = data.forecast.forecastday[0].hour[17].condition.text;
    document.getElementById("hour-temp-5").innerText = data.forecast.forecastday[0].hour[17].temp_c;

    document.getElementById("hour-icon-6").src =  changeIcon(data.forecast.forecastday[0].hour[18].condition.icon);
    document.getElementById("hour-cond-6").innerText = data.forecast.forecastday[0].hour[18].condition.text;
    document.getElementById("hour-temp-6").innerText = data.forecast.forecastday[0].hour[18].temp_c;

    document.getElementById("hour-icon-7").src =  changeIcon(data.forecast.forecastday[0].hour[19].condition.icon);
    document.getElementById("hour-cond-7").innerText = data.forecast.forecastday[0].hour[19].condition.text;
    document.getElementById("hour-temp-7").innerText = data.forecast.forecastday[0].hour[19].temp_c;

    document.getElementById("day-icon-1").src =  changeIcon(data.forecast.forecastday[0].day.condition.icon);
    document.getElementById("day-cond-1").innerText = data.forecast.forecastday[0].day.condition.text;
    document.getElementById("day-avg-1").innerText = data.forecast.forecastday[0].day.avgtemp_c;

    document.getElementById("day-icon-2").src =  changeIcon(data.forecast.forecastday[1].day.condition.icon);
    document.getElementById("day-cond-2").innerText = data.forecast.forecastday[1].day.condition.text;
    document.getElementById("day-avg-2").innerText = data.forecast.forecastday[1].day.avgtemp_c;

    document.getElementById("day-icon-3").src =  changeIcon(data.forecast.forecastday[2].day.condition.icon);
    document.getElementById("day-cond-3").innerText = data.forecast.forecastday[2].day.condition.text;
    document.getElementById("day-avg-3").innerText = data.forecast.forecastday[2].day.avgtemp_c;

    document.getElementById("day-icon-4").src =  changeIcon(data.forecast.forecastday[3].day.condition.icon);
    document.getElementById("day-cond-4").innerText = data.forecast.forecastday[3].day.condition.text;
    document.getElementById("day-avg-4").innerText = data.forecast.forecastday[3].day.avgtemp_c;

    document.getElementById("day-icon-5").src =  changeIcon(data.forecast.forecastday[4].day.condition.icon);
    document.getElementById("day-cond-5").innerText = data.forecast.forecastday[4].day.condition.text;
    document.getElementById("day-avg-5").innerText = data.forecast.forecastday[4].day.avgtemp_c;

    document.getElementById("day-icon-6").src =  changeIcon(data.forecast.forecastday[5].day.condition.icon);
    document.getElementById("day-cond-6").innerText = data.forecast.forecastday[5].day.condition.text;
    document.getElementById("day-avg-6").innerText = data.forecast.forecastday[5].day.avgtemp_c;

    document.getElementById("day-icon-7").src =  changeIcon(data.forecast.forecastday[6].day.condition.icon);
    document.getElementById("day-cond-7").innerText = data.forecast.forecastday[6].day.condition.text;
    document.getElementById("day-avg-7").innerText = data.forecast.forecastday[6].day.avgtemp_c;
    
    

    


}

function changeIcon(op){
    switch(op){
        case "//cdn.weatherapi.com/weather/64x64/day/113.png": //Sunny day
            return "Assets/production/fill/all/clear-day.svg";
            
        case  "//cdn.weatherapi.com/weather/64x64/day/176.png": //Patch rain day
            return "Assets/production/fill/all/drizzle.svg";

        case "//cdn.weatherapi.com/weather/64x64/night/176.png": //Patchy rain night
            return "Assets/production/fill/all/partly-cloudy-night-drizzle.svg";

        case "//cdn.weatherapi.com/weather/64x64/night/116.png": //Partly cloud night
            return "Assets/production/fill/all/partly-cloudy-night.svg";

        case "//cdn.weatherapi.com/weather/64x64/day/116.png": //Partly cloud day
            return "Assets/production/fill/all/partly-cloudy-day.svg";;

        case "//cdn.weatherapi.com/weather/64x64/night/113.png": //clear night
            return "Assets/production/fill/all/clear-night.svg";

        case "//cdn.weatherapi.com/weather/64x64/day/119.png": //cloudy day
            return "Assets/production/fill/all/cloudy.svg";

        case "//cdn.weatherapi.com/weather/64x64/day/302.png": //moderate rain day
            return "Assets/production/fill/all/rain.svg";

        case "//cdn.weatherapi.com/weather/64x64/day/353.png": //light rain day
            return "Assets/production/fill/all/rain.svg";

        case "//cdn.weatherapi.com/weather/64x64/night/353.png": //light rain night
            return "Assets/production/fill/all/partly-cloudy-night-drizzle.svg";

        case "//cdn.weatherapi.com/weather/64x64/night/143.png": //mist night
            return "Assets/production/fill/all/fog-night.svg";

        case "//cdn.weatherapi.com/weather/64x64/day/308.png": //heavy rain day
            return "Assets/production/fill/all/thunderstorms-day-rain.svg";
        
    }
}

