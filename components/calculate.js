const Calculate = ( {currentValue = 0, inc , dec, count } ) => {

    inc.addEventListener('click',()=>{
        currentValue++;
        count.innerText = currentValue;
    }); 

    dec.addEventListener('click',()=>{
        currentValue--;
        count.innerText = currentValue;
    }); 

}

export default Calculate;