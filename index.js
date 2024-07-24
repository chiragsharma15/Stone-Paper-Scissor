// let rock = document.getElementById('rock');
// let paper = document.getElementById('paper');
// let scissor = document.getElementById('scissor');

// rock.addEventListener('click', function(){
//     game('rock');
//     console.log('rock');
// });
// paper.addEventListener('click', function(){
//     game('paper');
//     console.log('paper');
// });
// scissor.addEventListener('click', function(){
//     game('scissor');
//     console.log('scissor');
// }); 

let comp_win = 0;
let user_win = 0;
const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        console.log(`Your choice is ${choice.id}`);
        game(choice.id);
    })
})

const compchoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const comp = choices[Math.floor(Math.random() * 3)];
    console.log(`Computer choice is ${comp}`);
    return comp;
}


const showWinner = (userWin) => {
    if (userWin){
        user_win++;
        document.querySelector("#user-score").textContent = user_win;
        document.querySelector("#msg").textContent = "YOU WIN!";
    }   
    else{
        comp_win++;
        document.querySelector("#comp-score").textContent = comp_win;
        document.querySelector("#msg").textContent = "YOU LOSE!";
    }
}

const draw = () => {
    document.querySelector("#msg").textContent = "DRAW!";
}

const game = (userChoice) =>{
    
    let computerChoice = compchoice();
    

    if (userChoice === computerChoice){
        draw();
    }
    else{
        let userWin = true;
   if (userChoice === 'rock'){
            // scissor, paper
            userWin = computerChoice ==='paper' ? false : true;
        }
        else if (userChoice === 'paper' ){
            // rock, scissor
            userWin = computerChoice ==='scissors' ? false : true;
        }
        else if (userChoice === 'scissors' ){
            // rock, paper
            userWin = computerChoice ==='rock' ? false : true;
        }        
        showWinner(userWin);
    }

    
}   
