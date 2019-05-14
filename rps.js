const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
}
else{
    console.log("there is an error man")
}
};

const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'scissors';
        case 2:
        return 'paper'
    }
}

const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return "The game is a tie";
    }
      if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return "Computer won";
      }
      else{
          return "User won";
        }
      }
    if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
        return "Computer won";
      }
    else{
          return "User won";
        }
      }
    if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
        return "Computer won";
      }
      else{
          return "User won";
        }
    }
  }

 const playGame = () =>{
     const userChoice = getUserChoice('paper');
     const computerChoice = getComputerChoice();
     console.log('your choice is: ' + userChoice);
     console.log('the computer choice is: ' + computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
 }
 playGame();