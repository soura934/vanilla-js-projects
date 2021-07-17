const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',() =>{
    let bodyEle = document.body;
    let randomColorsPos = Math.floor(Math.random() * colors.length);
    bodyEle.style.backgroundColor = colors[randomColorsPos];
    color.textContent = colors[randomColorsPos];
});
