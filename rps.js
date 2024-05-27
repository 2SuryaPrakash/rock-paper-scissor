function getComputerChoice()
{
    let x=Math.floor(Math.random()*100);
    if(x<=32)
        {
            return 'rock';
        }
    else if(x<=65)
        {
            return 'paper';
        }
    else 
    {
        return 'scissor';
    }
}
function getHumanChoice()
{
    let x=prompt('Enter Choice (Rock/Paper/Scissor):').toLowerCase();
    return x;
}
let humanScore=0,computerScore=0;
function playRound()
{
    let human=getHumanChoice();
    let computer=getComputerChoice();
    if(!(['rock','paper','scissor'].includes(human)) )
    {
        alert('Invalid input!!!');
        playRound();
        return;
    }
    if(human==computer){
        console.log('Draw!!');
    }
    else if(human=='rock')
    {
       if(computer=='paper')
        {
            console.log('You Lost! Paper beats Rock!');
            computerScore++;
        }
        else if(computer=='scissor')
        {
                console.log('You Won! Rock beats Scissor!');
                humanScore++;
        }
    }
    else if(human=='paper')
    {
        if(computer=='scissor'){
            console.log('You Lost! Scissor beats Paper!');
            computerScore++;
        }
        else if(computer=='rock'){
            console.log('You Won! Paper beats Rock!');
            humanScore++;

        }
    }
    else if(human=='scissor'){
        if(computer=='rock')
            {
                console.log('You Lost! Rock beats Scissor!');
                computerScore++;
            }
        else if(computer=='paper')
            {
                console.log('You Won! Scissor beats Paper!');
                humanScore++;
            }
    }
    
}
function playGame(rounds)
    {
        for(let i=0;i<rounds;i++)
        {
            playRound();
        } 
        if(humanScore==computerScore)
        {
            alert('It is a draw!!');
        }
        else{
            let result=(humanScore>computerScore)?'human':'computer';
            alert('The Winner is '+result+' !!!');
        }
    }  
    playGame(parseInt(prompt('Enter number of rounds to play:')));