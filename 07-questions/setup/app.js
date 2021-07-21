//using selectors inside the element
// traversing the dom
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", (e)=>{
        console.log(e);
        console.log(e.currentTarget);
    })
});