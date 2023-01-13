let date = new Date();
let year = date.getFullYear();

console.log(year)

document.querySelector('.year-name').innerHTML = '&copy;' + year + " Juan Zurita - Idaho";

let currentDate = document.lastModified;

document.querySelector('.last-updated').textContent = `Last Updated: ${currentDate}`;
