



let display=document.querySelector(".display");
let btncleare=document.querySelector("#btn-cleare");
let btnclearelastaction=document.querySelector("#btn-cleare-last-action");
let btnbackespace=document.querySelector("#btn-backe-space");
let btnmul=document.querySelector("#btn-mul");
let btnminus=document.querySelector("#btn-minus");
let btnplus=document.querySelector("#btn-plus");
let btndiv=document.querySelector("#btn-div");
let btnpoint=document.querySelector("#btn-point");
let btnequls=document.querySelector("#btn-equls");
let btnpn=document.querySelector("#btn-pn");
let btnNumbers=document.querySelectorAll(".btn-number");

let setBtnpoint=false;

btncleare.addEventListener('click',(e)=>{

display.textContent="0.0"; /*وقتی دکمه کلیر کلیک شدن مقدار ری که در صفحه نمایس یا دیزپلی هست را پاک کن */

setBtnpoint=false;/*کاربر وقتی دکمه clear را زد همه چیز به حالت اول برگرده */

setresult=false;
number1=0,number2=0;

})

btnNumbers.forEach((item) => {

    item.addEventListener('click',(e)=>{

        /*حلقهif عملیات جایگزین کردن عدد را از بین میبره */
        if(display.textContent=="0.0"){

            display.textContent=e.target.textContent;  /*دسترسی به محتوای متنی صفحه نمایش(display)*/
        }else{
            display.textContent+=e.target.textContent;  /*عدد را جایگزین نمیکنه فقط اضافه میکنه مثا 78 */
        }
      
    })

})


/*بک اسپیس,هر بار که بک اسپیس را زدیم یک المان باید حذف بشه */

btnbackespace.addEventListener('click',(e)=>{

let len=display.textContent.length;/*طوال مقادیر صفحه نمایش رتیم و ریختیم توی متغیرlenا گرف */



let lastDigit=display.textContent.substring(len-1,len);
/*پاک کردن پوینت با بک اسپس */
if(lastDigit=="."){

    setBtnpoint=false;
}


if(len>1){
/*برای اینکه یک مقدار را حذف کنه یه زیر متن ازش میخوایم که با تابع substringانجام میشه */
display.textContent=display.textContent.substring(0,len-1);

}else{
    display.textContent="0.0";
}

})

/*دکمه مثبت و منفی */
btnpn.addEventListener('click',(e)=>{
 
display.textContent=display.textContent * -1;

})

/* دکمه نقطه*/
btnpoint.addEventListener('click',(e)=>{

    if(setBtnpoint==false){

        display.textContent += ".";
        setBtnpoint=true;
    }
    
})
/*دکمهce */
btnclearelastaction.addEventListener('click',(e)=>{
    display.textContent="0.0";
})
/*عملگر جمع */

let number1,number2,op="",result;

btnplus.addEventListener('click',(e)=>{

number1=Number(display.textContent);
display.textContent="0.0";
op="+";

})

btnminus.addEventListener('click',(e)=>{

    number1=Number(display.textContent);
    display.textContent="0.0";
    op="-";
    
    })

btndiv.addEventListener('click',(e)=>{

 number1=Number(display.textContent);
 display.textContent="0.0";
 op="/";
        
})    
    
btnmul.addEventListener('click',(e)=>{

    number1=Number(display.textContent);
    display.textContent="0.0";
    op="*";
    
    })

    

 let setresult=false;

/*عملگر= */
btnequls.addEventListener('click',(e)=>{

    if(setresult == false){
        
        number2=Number(display.textContent);
    }else{
        number1=Number(display.textContent);
    }


switch(op){
    case "+":
    result=number1 + number2;
    break;

    case "-":
    result=number1 - number2;
    break;

    case "/":
    result=number1 / number2;
    break; 

    case "*":
    result=number1 * number2;
    break;
}
display.textContent=result;
setresult=true;
})