import Calculate from "./calculate.js";

export const Counter = () => {
  let counterElement = document.querySelector(".counter")!;
  let currentValue = 0;

  counterElement.innerHTML = `
        <button class="inc">+</button>
        <span class="count">${currentValue}</span>
        <button class="dec">-</button>
    `;

  let inc = counterElement.querySelector(".inc") as HTMLButtonElement;
  let dec = counterElement.querySelector(".dec") as HTMLButtonElement;
  let count = counterElement.querySelector(".count") as HTMLElement;

  Calculate({ currentValue, inc, dec, count });
};
