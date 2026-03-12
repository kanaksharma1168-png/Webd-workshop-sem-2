/*var a=20;
var a=30;
console.log(a);
{int a=20;
    a=40;
    console.log(a;)
}*/
/*const b=20;
console.log(b);*/
/*let y=10;
y=25;
console.log(y);*/

//operators(arthemetic)
/*let a=20;
let b=10;
console.log(a+b);//outpput=30
console.log(a-b);//10
console.log(a/b);//2
console.log(a*b);//200
console.log(a%b);//0
console.log(a++);//20
console.log(++a);//22
console.log(a--);//22
console.log(--a);//20
console.log(a);//20   */

//comparison operator
/*let a=45;
let b="45";
console.log(a==b);//true
console.log(a===b);//false
console.log(a!=b);//false  */

//logical
/*let a=24;
let b=30;
console.log(a<20 && b>25);//
console.log(a<20 || b>25);//true
console.log(!(a<20);//true */

//concatenate
/*let str1="hello";
let str2="world";
let r=str1+" "+str2;
console.log(r);*/

//ternary 
/*let age=18;
let message=age>=18?"you are an adult":"you are minor";
console.log(message);*/

//conditionals statements
//condition: if,elseif... else, switch
let a=25;
if (a<18){
    console.log("you are minor");
}
else{
    console.log("yoy are adult");
}

let x=10;
if(x>0)
{
    console.log("x is positive");
}
else if(x<0)
{
    console.log("x is negative");
}
else{
    console.log("x is zero");
}

let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}