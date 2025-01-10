const diceImg = document.getElementById('diceImg')
const btn = document.getElementById('btn')

// Genarate Random number for dice image
const genarateAns = () => {
    const ans = Math.round(Math.random() * 5) + 1
    diceImg.src = `images/${ans}.png`
}