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