console.log("ello");
const priDisplay= document.querySelector('.pri-display');//first input class
const secDisplay= document.querySelector('.sec-display');//Second input class
const buttons=document.querySelector('.buttons-container')//button class
let operator='';
let firstNum='';

buttons.addEventListener('click', (event)=>{
    let priValue= priDisplay.innerHTML;
    let secValue= secDisplay.innerHTML;
    let buttonValue= event.target.innerHTML;
    
    // for Number
    if(event.target.classList.contains('number')){
        if(priDisplay.innerText === '0' && buttonValue === '0'){
            console.log('Do Nothing');
        }
        else if(priValue === '0'){
            priDisplay.innerHTML = buttonValue;
        }
        else{
            if(buttonValue === '.' && priValue.contains('.'))
            {
                console.log('Do nothing');
            }
            else
            priDisplay.innerHTML += buttonValue; 
        }
    }
    
    
    // for operator
    if(event.target.classList.contains('operator')){
        if(priDisplay.innerHTML!='0')
        {
            operator = buttonValue;
            firstNum = priValue;
            secDisplay.innerHTML = firstNum + ' ' +operator;
            priDisplay.innerHTML='0';
        }
    }
    
    
    // for calculation
    if(event.target.classList.contains('equal')){
        switch(operator){
            case '+': priDisplay.innerHTML = Number(firstNum) + Number(priDisplay.innerHTML);
                      secDisplay.innerHTML='';
                      break;
            case '-': priDisplay.innerHTML  = Number(firstNum) - Number(priDisplay.innerHTML);
                      secDisplay.innerHTML='';
                      break;
            case '*': priDisplay.innerHTML  = Number(firstNum) * Number(priDisplay.innerHTML);
                      secDisplay.innerHTML='';
                      break;
            case '/': priDisplay.innerHTML  = Number(firstNum) / Number(priDisplay.innerHTML );
                      secDisplay.innerHTML='';
                      break;
            case '%': priDisplay.innerHTML  = parseFloat(firstNum) % parseFloat(priDisplay.innerHTML );
                      secDisplay.innerHTML='';
                      break;
        }
    }

    if(event.target.classList.contains('clear')){
        priDisplay.innerHTML='';
        secDisplay.innerHTML='';
}
else if(event.target.classList.contains('delete')){
    
    priDisplay.innerHTML= priDisplay.innerHTML.slice(0,-1);
}
});
