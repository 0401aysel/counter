# counter

My questions?

in '/components/Counter.js'

Calculate({countElem}); work 
Calculate(countElem);   don't work

const Calculate = ( {countElem, inc , dec, count } ) => {   }  why this pattern

const Calculate ( countElem, inc , dec, count ) {   }  not this

differences -> export and export default return 

import './components/newCounter.js';   or  import {NewCounter} from './components/newCounter.js';


Advantages and disadvantages =>

i use calculate.js -> for all calcs -> reusuable component 

ExampleLessonCounter ->  every time write again same codes, but if we need add new value attributes it good work
Counter  and NewCounter -> same , only difference is get initial value from const or innerHTML 