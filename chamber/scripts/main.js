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