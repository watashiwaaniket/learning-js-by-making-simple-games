const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result') 
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click' , (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if(randomNumber == 1) 
    {
        computerChoice = 'rock'
    }
    if(randomNumber == 2)
    {
        computerChoice = 'paper'
    }
    if(randomNumber == 3)
    {
        computerChoice = 'scissors'
    }
    console.log(randomNumber)
    console.log(computerChoice)
    //computerChoiceDisplay.innerHTML = computerChoice
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult()
{
    if (computerChoice == userChoice)
    {
        result = "it's a draw!"
    }
    if (computerChoice == 'rock' && userChoice == 'paper')
    {
        result = "You won! :3"
    }
    if (computerChoice == 'rock' && userChoice == 'scissors')
    {
        result = "You lost ;-;"
    }
    if (computerChoice == 'paper' && userChoice == 'rock')
    {
        result = "You lost ;-;"
    }
    if (computerChoice == 'paper' && userChoice == 'scissors')
    {
        result = "You won! :3"
    }
    if (computerChoice == 'scissors' && userChoice == 'rock')
    {
        result = "You won! :3"
    }
    if (computerChoice == 'scissors' && userChoice == 'paper')
    {
        result = "You lost ;-;"
    }
    resultDisplay.innerHTML = result    
}