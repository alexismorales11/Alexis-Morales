const burger = document.querySelector(".container_burger");
const cross = document.querySelector(".container_cross");
const menumobile = document.querySelector(".container_header_mobile_general");


burger.addEventListener("click", function(){
    menumobile.classList.add("show");
});

cross.addEventListener("click", function(){
    menumobile.classList.remove("show");
});

window.scrollTo(x-coordinate, y-coordinate)
console.log()
