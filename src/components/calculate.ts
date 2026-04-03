interface ICalc {
  currentValue: number;
  inc: HTMLButtonElement;
  dec: HTMLButtonElement;
  count: HTMLElement;
}
const Calculate = ({ currentValue = 0, inc, dec, count }: ICalc) => {
  inc.addEventListener("click", () => {
    currentValue++;
    count.innerText = currentValue.toString();
  });

  dec.addEventListener("click", () => {
    currentValue--;
    count.innerText = currentValue.toString();
  });
};

export default Calculate;
