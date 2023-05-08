const score = {
  wins: 0,
  losses: 0,
  ties: 0
};


function playGame(playerMove){
  const computerMove = picComputerMove()
    let result = '';
    /* if for scisser */
    if (playerMove === 'scisser'){
      if (computerMove === 'rock'){
        result = 'You lose';
      } else if (computerMove === 'paper'){
        result = 'You win';
      }else if (computerMove === 'scisser'){
        result = 'Tie'
      }
      /* if for paper */
    }else if (playerMove === 'paper'){
      if (computerMove === 'rock'){
        result = 'You win';
      } else if (computerMove === 'paper'){
        result = 'Tie';
      }else if (computerMove === 'scisser'){
        result = 'You lose'
      }
      /* if for rock */
    }else if (playerMove === 'rock') {
      if (computerMove === 'rock'){
        result = 'Tie';
      } else if (computerMove === 'paper'){
        result = 'You lose';
      }else if (computerMove === 'scisser'){
        result = 'You win'
      }
    }

    if (result === 'You win'){
      score.wins += 1;
    }else if (result === 'You lose'){
      score.losses += 1;
    }else if (result === 'Tie'){
      score.ties += 1;
    }


    /* alert for result */    
    document.getElementById('result-final').innerText = `You picked ${playerMove}\nComputer picked ${computerMove}\n${result}`
    /*alert(`you picked ${playerMove}.\nComputer picked ${computerMove}\n.${result}`)*/
    document.getElementById('score').innerText = `Wins = ${score.wins}\nLose = ${score.losses}\nTie = ${score.ties}`; 
    
    /*document.getElementById('result-final1').innerText = score.losses;
    document.getElementById('result-final1').innerText = score.ties;*/
}

/* function for computer move */
function picComputerMove(){
  const randomNumber = Math.random();
    let computerMove = '';
    if ( randomNumber >=0 && randomNumber < 1/3){
      computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber <2/3){
      computerMove = 'paper';
    }else if (randomNumber >=2/3 && randomNumber <3/3){
      computerMove = 'scisser';
    }
    /* return move the computer to comparison */
    return computerMove;
}

function restart(){
  document.getElementById('result-final').innerText = "Let's Play"
  document.getElementById('score').innerText = "score"
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}