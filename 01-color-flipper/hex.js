const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colorElement = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let bodyEle = document.body;
    bodyEle.style.backgroundColor = randomColor();
    colorElement.textContent = randomColor();
})
const randomColor = () => {
    let color = ['#'];

    while (color.length <= 6){
        let char = hex[Math.floor(Math.random() * hex.length)];
        color.push(char);
    }

    return color.join("");
}
