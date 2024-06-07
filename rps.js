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

let humanScore=0,computerScore=0;
document.querySelectorAll('img').forEach(x=>{
    x.addEventListener('click',(e)=>{
        playRound(e.target.className);
    });
});
function sethscore(score)
{
    let f=document.querySelector('.you');
    f.textContent='Your Score : '+score;

}
function setcscore(score) {
    let f=document.querySelector('.computer');
    f.textContent='Computer Score : '+score;
}
function playRound(human)
{
    
    
    
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
    setcscore(computerScore);
    sethscore(humanScore);
    if(computerScore>=5||humanScore>=5) {
        if(computerScore==humanScore) {
            alert('It is a draw!!');
        }
        else{
            let result=(humanScore>computerScore)?'human':'computer';
            alert('The Winner is '+result+' !!!');
        }
        computerScore=humanScore=0;
        setcscore(0);
        sethscore(0);
    }
}
function playGame()
    {
        console.log('hi');
        while(computerScore<5&&humanScore<5)
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
    // playGame(parseInt(prompt('Enter number of rounds to play:')));

