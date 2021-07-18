// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
navBtn = document.querySelector(".nav-toggle");
listOfLinks = document.querySelector(".links");

navBtn.addEventListener("click", ()=>{
    listOfLinks.classList.toggle("show-links");
})