
let screen =document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{

        buttonText=e.target.innerText;
        console.log('button is pressend',buttonText)
        screen.value+=buttonText;
        if(buttonText=='x'){

            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;

        }

        else if(buttonText=='c'){

            screenValue="";
            screen.value="";


        }
        else if(buttonText=='='){

            screen.value=eval(screenValue);


        }
        else{

            screenValue+=buttonText;
            Screen.value=screenValue;
        }
    })
}