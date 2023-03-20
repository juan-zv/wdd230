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


//FETCH DATA--------------------------------------------------------------------------
let url = "https://juan-zv.github.io/wdd230/chamber/data.json";

async function getCompanies(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    assignElements(data.companies);
}
getCompanies(url);

function assignElements(companies) {
    let cardNUm = 1;
    
    companies.forEach(element => {
        
        let image = document.querySelector(`#card${cardNUm} .company-img`);
        let tImage = document.querySelector(`#row${cardNUm} .company-img`);
        image.setAttribute("src", element.image);
        tImage.setAttribute("src", element.image);
        
        let name = document.querySelector(`#card${cardNUm} .company-name`);
        let tName = document.querySelector(`#row${cardNUm} .company-name`);
        name.textContent = element.name;
        tName.textContent = element.name;
        
        let address = document.querySelector(`#card${cardNUm} .company-address`);
        let tAddress = document.querySelector(`#row${cardNUm} .company-address`);
        address.textContent = element.address;
        tAddress.textContent = element.address;
        
        let phoneNum = document.querySelector(`#card${cardNUm} .company-phone`);
        phoneNum.textContent = element.phone;
        document.querySelector(`#card${cardNUm} .phone`).setAttribute("href", `tel:${element.phone}`);
        let tPhoneNum = document.querySelector(`#row${cardNUm} .company-phone`);
        tPhoneNum.textContent = element.phone;
        
        let website = document.querySelector(`#card${cardNUm} .company-website`);
        website.textContent = element.website;
        document.querySelector(`#card${cardNUm} .website`).setAttribute("href", element.website);
        document.querySelector(`#card${cardNUm} .website`).setAttribute("target", "blank_");
        let tWebsite = document.querySelector(`#row${cardNUm} .company-website`);
        tWebsite.textContent = element.website;
        
        cardNUm ++;
    });
}


//BUTTON FOR LIST OR CARDS-----------------------------------
let grid = document.getElementById("grid");
let list = document.getElementById("list");

let table = document.getElementById("table");
let cards = document.getElementById("cards");

//preset show grid
cards.style.display = "grid";
table.style.display = "none";

grid.addEventListener("click", ()=>{
    cards.style.display = "grid";
    table.style.display = "none";
});

list.addEventListener("click", ()=>{
    table.style.display = "table";
    cards.style.display = "none";
});


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