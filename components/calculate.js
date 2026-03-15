const Calculate = ( {countElem, inc , dec, count } ) => {

    inc.addEventListener('click',()=>{
        countElem++;
        count.innerText = countElem;
    }); 

    dec.addEventListener('click',()=>{
        countElem--;
        count.innerText = countElem;
    }); 

}

export default Calculate;