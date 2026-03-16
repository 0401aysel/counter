import Calculate from './calculate.js';

export const ExampleLessonCounter = () =>{
    let currentValue = 18;

    let counterElement = document.querySelector('.lesson-inner');
    
    counterElement.innerHTML = `
        <button class="inc">inc</button>
        <p class="count">${currentValue}</p>
        <button class="dec">dec</button>
    `;

    let inc = counterElement.querySelector('.inc');
    let dec = counterElement.querySelector('.dec');
    let count = counterElement.querySelector('.count'); 

    Calculate({currentValue, inc , dec, count});
}