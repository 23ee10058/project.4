const sum=document.querySelector('#sum')
const subs=document.querySelector('#subs')
const multiply=document.querySelector('#multiply')
const divide=document.querySelector('#divide')
const text_contain=document.querySelector('.text_container')
const sum_=document.querySelector('.sum')


function clear_(){
    display='';
    text_contain.value=display;
}
function print_sum(){
    text_contain.value=text_contain.value+'+';
}
function print_1(){
    text_contain.value=text_contain.value+'1';
    //console.log(typeof(text_contain.value))
    //console.log(text_contain.value.slice(0,-1))
    
}
function print_2(){
    text_contain.value=text_contain.value+'2';
    //console.log(text_contain.value)
    
}
function print_3(){
    text_contain.value=text_contain.value+'3';
    //console.log(text_contain.value)
    
}
function print_4(){
    text_contain.value=text_contain.value+'4';
    //console.log(text_contain.value)
    
}
function print_5(){
    text_contain.value=text_contain.value+'5';
    //console.log(text_contain.value)
}
function print_6(){
    text_contain.value=text_contain.value+'6';
    //console.log(text_contain.value)
    
}
function print_7(){
    text_contain.value=text_contain.value+'7';
    //console.log(text_contain.value)
    
}
function print_8(){
    text_contain.value=text_contain.value+'8';
    //console.log(text_contain.value)
    
}
function print_9(){
    text_contain.value=text_contain.value+'9';
    //console.log(text_contain.value)
    
}
function print_0(){
    text_contain.value=text_contain.value+'0';
    //console.log(text_contain.value)
    
}
function print_dot(){
    text_contain.value=text_contain.value+'.';
}
function equal(){
    text_contain.value=eval(text_contain.value)
}
function print_subs(){
    text_contain.value=text_contain.value+'-';
}
function print_multiply(){
    text_contain.value=text_contain.value+'*';
} 
function print_div(){
    text_contain.value=text_contain.value+'/';
} 
function del(){
    display=text_contain.value.slice(0,-1);
    text_contain.value=display;
}