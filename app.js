const max=prompt("Enter the maximum value");

const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("User quiting");
        break;
    }

    if(guess==random){
        console.log("You are right! Congrats!! the random number was",random);
        break;
    }
     else if(guess<random){
        guess=prompt("Hint:Your guess was too small please try again");
     }
     else{
        guess=prompt("Hint:The number you guessed in large please guess a small number");
     }
}