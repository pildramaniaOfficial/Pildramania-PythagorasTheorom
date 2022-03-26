import { _print , _len , _dbl , _diffrence , _div , _half , _rnum , _sum , _t , _x , _rect , _square 
    , _a , _upper, _capitalize , _lower , _fjson , _p , _sqrt , _setBackgroundColor , _setbottomMargin , _setcolor , _sethtml , _setleftMargin , _setrightMargin , _settopMargin , _click , _clickhide , _clickshow 
    ,_hide , _inc ,_setBorderColor , _setBorderRadius , _setBorderStyle , _setBorderWidth , _setTextShadow , _setborder , _setdisplay ,
    _setfontFamily , _setpadding , _setpos , _setshadow} from './library/index.js';
    
import { Triangle , _tri  } from './library/triangle.js';



document.querySelector('#submit').addEventListener('click' , ( e ) => {

    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let a_square = _square(a);
    let b_square = _square (b);

    _sethtml('#ans' , `${_sqrt(a_square + b_square)} is the Hypotenuse`)
})
document.querySelector('#submit1').addEventListener('click' , ( e ) => {

    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let a_square = _square(a);
    let b_square = _square (b);

    _sethtml('#ans' , ` ${_sqrt(a_square - b_square)} Is the Length / Breadth`)
})