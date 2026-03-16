import Calculate from './calculate.js';

export const NewCounter = () => {
    let counterElement = document.querySelector('.new-inner');

    counterElement.innerHTML=`
        <button class="inc">+</button>
        <span class="count">10</span>
        <button class="dec">-</button>
    `;

    let inc = counterElement.querySelector('.inc');
    let dec = counterElement.querySelector('.dec');
    let count = counterElement.querySelector('.count'); 
    let currentValue = count.innerText;
    
    Calculate({currentValue, inc , dec, count});
}