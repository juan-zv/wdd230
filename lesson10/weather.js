const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/rexburg%2C%20idaho?unitGroup=metric&key=B7NKJ24KZHZ58EX3SH9EE8J9E&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = Math.round(t * 5/9 +32 );
};

getWeather();
