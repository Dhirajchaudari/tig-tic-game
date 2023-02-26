let restartBtn = document.querySelector(".restart-button");
let playerDispaley = document.getElementById("display-player");
let boxex = Array.from(document.getElementsByClassName("grid-box"));


const O_text = "O";
const X_text = "X";
let currentPlayer = X_text;
let spaces = Array(9).fill(null)


const boxClicked = (e) =>{
    let id = e.target.id 

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerDispaley.innerHTML = `${currentPlayer} has won`
            console.log(playerDispaley)
            let winningblock = playerHasWon()
            // console.log(winningblock)

            // winningblock.map(box => boxex[box])
            return
        }

        currentPlayer = currentPlayer == X_text ? O_text : X_text
    }
}

let winnigCombox = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

const playerHasWon = () =>{
    for(const condition of winnigCombox){
        let [a,b,c] = condition
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c] )){
            return [a,b,c]
        }
    }
    return false
}



const startGame = () =>{
    boxex.forEach(box => box.addEventListener("click",boxClicked))
}

const restart = () =>{
    spaces.fill(null)

    boxex.forEach(box =>{
        box.innerText = ""
    })

    playerDispaley.innerHTML = 'Tic tac game'

    currentPlayer = X_text  // after clicking it will start from "x" again
}

restartBtn.addEventListener("click",restart)

console.log(spaces)

startGame()