var msg1=document.getElementById("message1");
var msg2=document.getElementById("message2");
var answer=Math.floor(Math.random()*100)+1;



var no_of_guesses =1;
var guesses_num = [];
function play(){
    var user_guess =
    document.getElementById("guess").value;
    if(user_guess<1 || user_guess>100){
        alert("Please enter the number between 1 to 100 😒😒")
    }
    else
    {
        //guesses_num.push(user_guess);
       
        if(user_guess < answer){
            msg1.textContent = "Your Guess is Too Low..😑👎!!"
            msg2.textContent = "No of Guesses: " + no_of_guesses;
            no_of_guesses+=1;
        }
        else if(user_guess >answer){
            msg1.textContent = "Your Guess is Too High..🙄👎!!"
            msg2.textContent = "No of Guesses: " + no_of_guesses;
            no_of_guesses+=1;
        }
        else if(user_guess == answer){
            msg1.textContent = "YAY You Won It..🥳🥳👍!!"
            msg2.textContent = "The number was : " + answer;
            no_of_guesses+=1;
        }

    }
    
    

    
}
