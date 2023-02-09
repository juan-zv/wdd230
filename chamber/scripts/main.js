let date = new Date();
let year = date.getFullYear();
let formated_date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 



document.querySelector('#year-and-name').innerHTML = '&copy;' + year + " Juan Zurita - Idaho";

let currentDate = document.lastModified;

document.querySelector('#last-modified').textContent = `Last Updated: ${currentDate}`;

document.querySelector("#date").textContent = formated_date;



const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector(".ham");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("responsive");
})



// THIS IS FOR THE RESPONSIVE WEATHER DIV

const temp = document.querySelector(".t").textContent;
const windspeed = document.querySelector(".ws").textContent;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

if (temp <= 50 && windspeed > 3) {
    let windchill = document.querySelector(".wc");
    windchill.textContent = chill;
}
