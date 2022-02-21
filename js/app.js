let min=1;
let max=10;
let winingNum=5;

const btn=document.querySelector("#guess-btn");
const message=document.querySelector(".message");
const maxNum=document.querySelector(".max-num");
const minNum=document.querySelector(".min-num");
const guessInput=document.querySelector("#guess-input");

 let attempt=document.querySelector(".attempt")

minNum.textContent=min;
maxNum.textContent=max;




btn.addEventListener("click",function(){

let guess=parseInt(guessInput.value);

if(isNaN(guess)||guess<min||guess>max){
setMessage(`Нужно ввести число от ${min} до ${max},"red`)
}

if (guess===winingNum){
    
    guessInput.style.border="1px solid green";
    setMessage(`Поздравляем ! Вы угадали ${winingNum}`,"green");
    guessInput.value="";
    btn.textContent="Новая игра";
    btn.addEventListener("click",newGame)
  
    let numAttempt=parseInt(attempt.textContent)
    numAttempt=numAttempt-1;
    
let a=numAttempt.toString();

attempt.textContent=a;
 
}else{
    guessInput.style.border="1px solid red";
    guessInput.value="";
    setMessage(`Извините вы проиграли`,"red")
  
    let numAttempt=parseInt(attempt.textContent)
    numAttempt=numAttempt-1;
    
let a=numAttempt.toString();

attempt.textContent=a;

}
if (attempt.textContent==0){
    setMessage(`Извините у вас не осталось попыток`,"red")
    btn.textContent="Новая игра"
    btn.addEventListener("click",newGame)
}

});

function setMessage(msg,color){
    message.textContent=msg;
    message.style.color=color;
}

function newGame(){
    location.reload();
}



