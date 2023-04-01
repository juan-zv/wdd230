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
let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", ()=> {
    close.style.display = "block";
    hamburger.style.display = "none";
    menu.style.display = "block";
});

close.addEventListener("click", ()=> {
    hamburger.style.display = "block";
    close.style.display = "none";
    menu.style.display = "none";
})


//-----------------------------------------


//Discover Page Days Visited-----------------------------------------------------
const visitsDisplay = document.querySelector("#visits");

var firstVisitDate = new Date(localStorage.getItem("firstVisitDate"));

var timeDiff = Math.abs(date.getTime() - firstVisitDate.getTime());
var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

localStorage.setItem("firstVisitDate", date);

if (localStorage.getItem("firstVisitDate") === null) {
    localStorage.setItem("firstVisitDate", date);
}
visitsDisplay.textContent = daysDiff;