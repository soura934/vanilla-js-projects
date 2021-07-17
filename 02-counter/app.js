const value = document.querySelector('#value');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let count = 0;

decreaseButton.addEventListener('click', () => {
    count --;
    if (count < 0) {
        value.style.color = 'red';
    }
    value.innerHTML = count;
});
resetButton.addEventListener('click', () => {
    count = 0;
    value.style.color = 'black';
    value.innerHTML = count;
});
increaseButton.addEventListener('click', () => {
    count ++;
    if (count > 0) {
        value.style.color = 'green';
    }
    value.innerHTML = count;
});
// value.addEventListener('change', (count)=>{

//     } else  {
//         
//     } else {
//         value.style.color = 'red';
//     }

// })

