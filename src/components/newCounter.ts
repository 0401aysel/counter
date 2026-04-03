import Calculate from "./calculate.js";

export const NewCounter = () => {
  let counterElement = document.querySelector(".new-inner")!;

  counterElement.innerHTML = `
        <button class="inc">+</button>
        <span class="count">10</span>
        <button class="dec">-</button>
    `;

  let inc = counterElement.querySelector(".inc") as HTMLButtonElement;
  let dec = counterElement.querySelector(".dec") as HTMLButtonElement;
  let count = counterElement.querySelector(".count") as HTMLElement;
  let currentValue = Number(count.innerText);

  Calculate({ currentValue, inc, dec, count });
};
