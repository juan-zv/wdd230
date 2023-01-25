const button = document.querySelector(".btn");

function show() {
    button.classList.add("newstyle");
}

button.addEventListener("click", show);


const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector(".ham");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("responsive");
})