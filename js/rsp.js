console.log('pedra, papel, tesoura');

const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase();
  
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error !');
    }
  };
  
  function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 2);
  
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Error!'
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'The game is a tie!'
    } 
  
    if (userChoice === 'bomb'){
      return 'you wonn!'
    }
  
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'the computer won!'
      } else {
        return 'you won!'
      }
    }
  
    if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  };
  
  playGame();
  