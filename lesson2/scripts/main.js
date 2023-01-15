let date = new Date();
let year = date.getFullYear();
let currentDate = document.lastModified;


document.querySelector('.year-name').innerHTML = '&copy;' + year + " Juan Zurita - Idaho";
document.querySelector('.last-modified').innerHTML = " Last Modified: " + currentDate;
