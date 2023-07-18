let navBtn = document.getElementById("navBtn");
let sidebar = document.getElementById("sidebar");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let slider = document.getElementById("slides");


let navState = false;

navBtn.addEventListener("click", function () {
    if(navState == false){
        sidebar.classList.add("sidebar-visible");
        navState = true;
    }
    else {
        sidebar.classList.remove("sidebar-visible");
        navState = false;
    }
})

nextBtn.addEventListener("click", function () {
    slider.classList.add("slide1")
})

prevBtn.addEventListener("click", function () {
    slider.classList.remove("slide1")
})

function toTop() {
    document.documentElement.scrollTop = 0;
}