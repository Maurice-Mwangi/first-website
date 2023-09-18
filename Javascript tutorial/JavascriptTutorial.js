document.querySelector('#txtGuessNumber').onfocus = function(){
    document.querySelector('#txtGuessNumber').value = "";
}


let count = 0;

document.querySelector("#btnReveal").onclick = function(){
    let guessNumber = document.querySelector('#txtGuessNumber').value;
    if(Number(guessNumber)){
        let anyNumber = Math.floor(Math.random() * 10) + 1;
        if (guessNumber == anyNumber){
            count += 1;
            document.querySelector('#lblRevealNumber').innerHTML = "Correct the number is: " + anyNumber;
            document.querySelector('#lblhighestScore').innerHTML = "Your Score " + count;
        }else{
            document.querySelector('#lblRevealNumber').innerHTML = "Incorrect the random number is: " + anyNumber;
            document.querySelector('#lblhighestScore').innerHTML = "Your Score remains " + count;
        }
    }else{
        count = -10;
        document.querySelector('#lblRevealNumber').innerHTML =  guessNumber + " is no number";
        document.querySelector('#lblhighestScore').innerHTML = "Your Score " + count;
    };
    
}