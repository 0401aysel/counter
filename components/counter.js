import Calculate from './calculate.js';

export const Counter = () => {

    let counterElement = document.querySelector('.counter');
    let countElem = 0;

    counterElement.innerHTML=`
        <button class="inc">+</button>
        <span class="countElem">${countElem}</span>
        <button class="dec">-</button>
    `;

    let inc = document.querySelector('.inc');
    let dec = document.querySelector('.dec');
    let count = document.querySelector('.countElem'); 

    Calculate({countElem, inc , dec, count});

}