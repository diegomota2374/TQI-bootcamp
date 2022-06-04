var currentNumberWrapper = document.getElementById('currentNumber');
var botomIncrement = document.getElementsByClassName("adicionar");
var botomDecrement = document.getElementsByClassName("subtrair");
var currentNumber = 0;

botomIncrement[0].addEventListener('click',()=>{   
    
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else{
        botomIncrement.disabled = true; 
    }


    if(currentNumber < 10){
        botomIncrement[0].style.backgroundColor="rgb(226, 214, 241)";
    }else{
        botomIncrement[0].style.backgroundColor="rgb(125 118 133)";
    }
    if(currentNumber > 0){
        botomDecrement[0].style.backgroundColor="rgb(226, 214, 241)";
    }else{
        botomDecrement[0].style.backgroundColor="rgb(125 118 133)"; 
    }

});

botomDecrement[0].addEventListener('click',()=>{ 

    if(currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else{
        botomDecrement.disabled = true;
    }
    
    
    if(currentNumber < 10){
        botomIncrement[0].style.backgroundColor="rgb(226, 214, 241)";
    }else{
        botomIncrement[0].style.backgroundColor="rgb(125 118 133)";
    }
    if(currentNumber > 0){
        botomDecrement[0].style.backgroundColor="rgb(226, 214, 241)";
    }else{
        botomDecrement[0].style.backgroundColor="rgb(125 118 133)"; 
    }

});



