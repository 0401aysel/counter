import Calculate from "./calculate.js";

export const ExampleLessonCounter = () => {
  let currentValue = 18;

  let counterElement = document.querySelector(".lesson-inner")!;

  counterElement.innerHTML = `
        <button class="inc">inc</button>
        <p class="count">${currentValue}</p>
        <button class="dec">dec</button>
    `;

  let inc = counterElement.querySelector(".inc") as HTMLButtonElement;
  let dec = counterElement.querySelector(".dec") as HTMLButtonElement;
  let count = counterElement.querySelector(".count") as HTMLElement;

  Calculate({ currentValue, inc, dec, count });
};
