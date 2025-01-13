const py1Img = document.getElementById('Py1Img')
const py2Img = document.getElementById('Py2Img')
const py1 = document.getElementById('py1')
const py2 = document.getElementById('py2')
const result = document.getElementById('result')
let py1Score = 0
let py2Score = 0
py2.disabled = true

// Genarate Random number for dice image
const genarateAns = (py) => {
    if(py == 'py1'){
        py1Score = Math.round(Math.random() * 5) + 1
        py1.disabled = true
        py2.disabled = false
        flipDice('py1', py1Score)
    }else{
        py2Score = Math.round(Math.random() * 5) + 1
        py2.disabled = true
        flipDice('py2', py2Score)
    }
}

const flipDice = (py, score) =>{
    let date = new Date()
    let target = date.getMilliseconds()+1500
    let currentTime = date.getMilliseconds()
    let i = 1
    const rollDice = setInterval(() => {
        if(currentTime >= target){
            clearInterval(rollDice)
            py == 'py1' ? py1Img.src= `images/${score}.png` : py2Img.src= `images/${score}.png`
            if(py == 'py2') printResult()
        }else{
            py == 'py1' ? py1Img.src= `images/${i}.png` : py2Img.src= `images/${i}.png`
            i < 6 ? i++ : i = 1
            console.log(date.getSeconds())
            currentTime += 200
        }
    }, 200);
}

const printResult = () => {
    let ans = ''
    if(py1Score > py2Score) ans = `Player 1 wins !!`
    else if(py1Score == py2Score)   ans = `Its a Draw !!`
    else    ans = `Player 2 wins !!`
    result.innerHTML = ans
}


const reset = () => {
    result.innerHTML = ''
    py1Img.src = `images/0.png`
    py2Img.src = `images/0.png`
    py1.disabled = false
    py2.disabled = false
}