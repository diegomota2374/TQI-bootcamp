var currentNumberWrapper = document.getElementById('currentNumber')
var botomIncrement = document.getElementsByClassName("adicionar")
var botomDecrement = document.getElementsByClassName("subtrair")
var currentNumber = 0

botomIncrement[0].addEventListener('click',()=>{   
    
    if(currentNumber < 10){
        currentNumber++
        currentNumberWrapper.innerHTML = currentNumber;
        botomIncrement[0].style.backgroundColor="rgb(226, 214, 241)"
        botomDecrement[0].style.backgroundColor="rgb(226, 214, 241)"
    }else{
        botomIncrement.disabled = true
        botomIncrement[0].style.backgroundColor="rgb(125 118 133)"
    }
})

botomDecrement[0].addEventListener('click',()=>{ 

    if(currentNumber > 0){
        currentNumber--
        currentNumberWrapper.innerHTML = currentNumber
        botomDecrement[0].style.backgroundColor="rgb(226, 214, 241)"
        botomIncrement[0].style.backgroundColor="rgb(226, 214, 241)"
    }else{
        botomDecrement.disabled = true
        botomDecrement[0].style.backgroundColor="rgb(125 118 133)"
    }
    
})



