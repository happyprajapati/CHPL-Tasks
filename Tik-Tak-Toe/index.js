const msg = document.getElementById('msg')
const inputBox = document.querySelectorAll('.input-box')
const reset = document.getElementById('btn')
let turnFlag = true
let count = 0

// Turn msg
const turnMsg = () => msg.innerHTML = `player ${turnFlag ? 'O' : 'X'}'s turn`

// Change turn
const changeTurn = () => turnFlag = !turnFlag

// Winning positions
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// Reset input function
const resetInput = () => {
    inputBox.forEach(input => {
        input.innerHTML = ''
    })
    turnFlag = true
    count=0
    turnMsg()
}

// Disable inputs function
const disableInputs = () => {
    inputBox.forEach(input => {
        input.style.pointerEvents = 'none'
    })
}

// New game function
const newGame = () => {
    resetInput()
    inputBox.forEach(input => {
        input.style.pointerEvents = 'auto'
    })
}

// Draw game function
const drawGame = () => {
    msg.innerHTML = `its a draw!`
    disableInputs()
    setTimeout(() => {
        newGame()
    }, 2000);
}

// Handle click function
const handleClick = (input) => {
    if(input.innerHTML == ''){
        if(turnFlag){
            input.innerHTML= 'O'
            changeTurn()
            turnMsg()
        }else{
            input.innerHTML= 'X'
            changeTurn()
            turnMsg()
        }
        count += 1
        if(checkWinner()){
            msg.innerHTML = `player ${turnFlag ? "X" : "O"} wins!`
            disableInputs()
            setTimeout(() => {
                newGame()
            }, 2000);
        }

        if(count == 9 && !checkWinner()){
            drawGame()
        }
    }
}

// eventListeners for printing X and O
inputBox.forEach(input => {
    input.addEventListener('click', () => handleClick(input))
    
});

// winnigPosition match function
const checkWinner = () =>{
    return winningPositions.some(pos => {
        const [ip1, ip2, ip3] = [inputBox[pos[0]].innerHTML, inputBox[pos[1]].innerHTML, inputBox[pos[2]].innerHTML]
        if(ip1 != '' && ip2 != '' && ip3 != ''){
            if(ip1 == ip2 && ip2 == ip3) return true
        }
    })
}