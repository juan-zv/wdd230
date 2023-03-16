//Last Modified-----------------------------------------------------------
let currentDate = document.lastModified;
document.getElementById('lastModified').innerHTML = `Last Modified: ${currentDate}`;


//Copyright Date-----------------------------------------------------
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;


//Today's Date--------------------------------------------------------------
let formated_date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
document.getElementById("date").innerHTML = formated_date;

//Discover Page Days Visited-----------------------------------------------------
const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit, Welcome!`;
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);


//Tuesday and Thursday Banner-----------------------------------------------
let banner = document.getElementById("banner");
let bannerButton = document.querySelector("#banner button");

if (date.getDay() == 1 || date.getDay() == 2) {
    banner.style.display = "flex";
}
else {
    banner.style.display = "none";
}

bannerButton.addEventListener("click", ()=> {
    banner.style.display = "none";
});


// Hamburger Menu---------------------------------------------
let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');


hamburger.addEventListener('click', () => {
    menu.classList.toggle ='hide';

});


//Lazy load---------------------------------------------------------------------
const images = document.querySelectorAll('img');
const options = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };

const preloadImage = (img) => {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}

const io = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            io.unobserve(entry.target);
        }
    });
}, options);

images.forEach(image => {
    io.observe(image);
});


//Thank you pop up message--------------------------------------------------------
let submitForm = document.getElementById("submit");

submitForm.onsubmit = () => {window.open("index.html")};


//FETCH DATA--------------------------------------------------------------------------
let url = "https://juan-zv.github.io/wdd230/data.json";

let response = fetch(url);

let data = response.json();

console.log(data);