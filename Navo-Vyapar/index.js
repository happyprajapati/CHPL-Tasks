const py1 = document.getElementById('py1')
const py2 = document.getElementById('py2')
const py3 = document.getElementById('py3')
const py4 = document.getElementById('py4')
const pl1 = document.getElementById('pl1')
const pl2 = document.getElementById('pl2')
const pl3 = document.getElementById('pl3')
const pl4 = document.getElementById('pl4')
const sec1 = document.getElementById('sec1')
const sec2 = document.getElementById('sec2')
const sec3 = document.getElementById('sec3')
const sec4 = document.getElementById('sec4')
const currentPosition = document.querySelectorAll('#currentPosition')
const currentBalance = document.querySelectorAll('#currentBalance')
const diceBtn = document.getElementById('dice')
const diceBox = document.getElementById('dice-box')
const turnMsg = document.getElementById('turn-msg')
const buy = document.getElementById('buy')
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const game = document.getElementById('game')
const gMsg = document.getElementById('globle-msg')

let turn = 1

let player1 = {
    id: 1,
    name: '',
    money: 25000,
    position: 0,
    currentSection: 1
}
let player2 = {
    id: 2,
    name: '',
    money: 25000,
    position: 0,
    currentSection: 1
}
let player3 = {
    id: 3,
    name: '',
    money: 25000,
    position: 0,
    currentSection: 1
}
let player4 = {
    id: 4,
    name: '',
    money: 25000,
    position: 0,
    currentSection: 1
}

const sec1Places = [
    {
        path: 'images/start.png',
    },
    {
        name: 'Mumbai',
        path: 'images/mumbai.png',
        price: 8000,
        owner: 0,
        rent: 800
    },
    {
        name: 'chandigadh',
        path: 'images/chandigadh.png',
        price: 2900,
        owner: 0,
        rent: 300
    },
    {
        name: 'Ahmedabad',
        path: 'images/ahmedabad.png',
        price: 3500,
        owner: 0,
        rent: 350
    },
    {
        name: 'Gandhinagar',
        path: 'images/gandhinagar.png',
        price: 4000,
        owner: 0,
        rent: 400
    },
    {
        name: 'Income Tax',
        path: 'images/income.png',
        price: 500,
    },
    {
        name: 'Railways',
        path: 'images/railways.png',
        price: 9500,
        owner: 0,
        rent: 950
    },
    {
        name: 'Luck',
        path: 'images/question.png',
    },
    {
        name: 'Jaipur',
        path: 'images/jaipur.png',
        price: 3000,
        owner: 0,
        rent: 300
    },
    {
        name: 'Jail',
        path: 'images/jail.png',
        price: 600
    },
]
const sec2Places = [
    {
        name: 'Hydrabad',
        path: 'images/hydrabad.png',
        price: 3500,
        owner: 0,
        rent: 350
    },
    {
        name: 'Culcutta',
        path: 'images/culcutta.png',
        price: 6500,
        owner: 0,
        rent: 650
    },
    {
        name: 'Air India',
        path: 'images/airIndia.png',
        price: 10500,
        owner: 0,
        rent: 1500
    },
    {
        name: 'Darjiling',
        path: 'images/darjiling.png',
        price: 2500,
        owner: 0,
        rent: 250
    },
    {
        name: 'Wealth Tax',
        path: 'images/wealth.png',
        price: 1000,
    },
    {
        name: 'Patna',
        path: 'images/patna.png',
        price: 2000,
        owner: 0,
        rent: 200
    },
    {
        name: 'Community Chest',
        path: 'images/question.png',
    },
    {
        name: 'Kanpur',
        path: 'images/kanpur.png',
        price: 4000,
        owner: 0,
        rent: 400
    },
]
const sec3Places = [
    {
        name: 'Club',
        path: 'images/club.png',
        price: 800,
    },
    {
        name: 'Tamil Nadu',
        path: 'images/tamilNadu.png',
        price: 6000,
        owner: 0,
        rent: 600
    },
    {
        name: 'Kochin',
        path: 'images/kochin.png',
        price: 2500,
        owner: 0,
        rent: 250
    },
    {
        name: 'Motor Boat',
        path: 'images/motorBoat.png',
        price: 5500,
        owner: 0,
        rent: 550
    },
    {
        name: 'Goa',
        path: 'images/goa.png',
        price: 6500,
        owner: 0,
        rent: 650
    },
    {
        name: 'Income Tax',
        path: 'images/income.png',
        price: 500
    },
    {
        name: 'Banglore',
        path: 'images/banglore.png',
        price: 4000,
        owner: 0,
        rent: 400
    },
    {
        name: 'Luck',
        path: 'images/question.png',
    },
    {
        name: 'Chennai',
        path: 'images/chennai.png',
        price: 7000,
        owner: 0,
        rent: 700
    },
    {
        name: 'Rest House',
        path: 'images/rest.png',
    }
]
const sec4Places = [
    {
        name: 'Delhi',
        path: 'images/delhi.png',
        price: 6000,
        owner: 0,
        rent: 600
    },
    {
        name: 'Shimla',
        path: 'images/shimla.png',
        price: 2200,
        owner: 0,
        rent: 250
    },
    {
        name: 'Amritsar',
        path: 'images/amritsar.png',
        price: 3300,
        owner: 0,
        rent: 350
    },
    {
        name: 'Agra',
        path: 'images/agra.png',
        price: 2500,
        owner: 0,
        rent: 250
    },
    {
        name: 'Wealth Tax',
        path: 'images/wealth.png',
        price: 1000,
    },
    {
        name: 'Bus Service',
        path: 'images/bus.png',
        price: 3500,
        owner: 0,
        rent: 350
    },
    {
        name: 'Community Chest',
        path: 'images/question.png',
    },
    {
        name: 'Indore',
        path: 'images/indore.png',
        price: 1500,
        owner: 0,
        rent: 150
    }
]

let luck = [
    {
        id: 1,
        charge: 2500,
        msg: 'You won Lottery of ₹2500.'
    },
    {
        id: 2,
        charge: 1500,
        msg: 'You recieved ₹500 from each player as your birthday gift.'
    },
    {
        id: 3,
        charge: 1000,
        msg: 'You won crossword compition of ₹1000'
    },
    {
        id: 4,
        charge: 2000,
        msg: 'You recieved Income Tax refund of ₹2000'
    },
    {
        id: 5,
        charge: 2000,
        msg: 'You won Jack pot of ₹2000'
    },
    {
        id: 6,
        charge: 3000,
        msg: 'You recieved sales of stocks ₹3000'
    },
]

let communityChest = [
    {
        id: 1,
        msg: 'Go to jail.'
    },
    {
        id: 2,
        charge: 2000,
        msg: 'You loss ₹2000in sher market.'
    },
    {
        id: 3,
        charge: 1000,
        msg: 'You paid ₹1000 for school and medical fee.'
    },
    {
        id: 4,
        charge: 1500,
        msg: 'You paid ₹1500 for house repair.'
    },
    {
        id: 5,
        charge: 2000,
        msg: 'You paid ₹2000 for marriage celebration.'
    },
    {
        id: 6,
        charge: 3000,
        msg: 'You loss ₹3000 due to fire in godown.'
    },
]

let unperchasedplacesCount = 24
let currentPlayer
let placeData
let activeSection = sec1Places

const showGame = () => {
    let section1 = ''
    let section2 = ''
    let section3 = ''
    let section4 = ''

    sec1Places.forEach(place => {
        section1 += `<div class="flex place">
                        ${place.name ?? ''}
                        <img src=${place.path}>
                        ₹${place.price ?? ''}
                    </div>`
    });
    sec2Places.forEach(place => {
        section2 += `<div class="flex place">
                        ${place.name ?? ''}
                        <img src=${place.path}>
                        ₹${place.price ?? ''}
                    </div>`
    });
    sec3Places.forEach(place => {
        section3 += `<div class="flex place">
                        ${place.name ?? ''}
                        <img src=${place.path}>
                        ₹${place.price ?? ''}
                    </div>`
    });
    sec4Places.forEach(place => {
        section4 += `<div class="flex place">
                        ${place.name ?? ''}
                        <img src=${place.path}>
                        ₹${place.price ?? ''}
                    </div>`
    });
    // console.log(section1)
    sec1.innerHTML = section1
    sec2.innerHTML = section2
    sec3.innerHTML = section3
    sec4.innerHTML = section4

    pl1.innerHTML = player1.name
    pl2.innerHTML = player2.name
    pl3.innerHTML = player3.name
    pl4.innerHTML = player4.name

    currentBalance[0].innerHTML = `₹${player1.money}`
    currentBalance[1].innerHTML = `₹${player2.money}`
    currentBalance[2].innerHTML = `₹${player3.money}`
    currentBalance[3].innerHTML = `₹${player4.money}`

    turnMsg.innerText = `Player ${turn} Turn`

    buy.disabled = true
}

const showMsg = (msg) => {
    gMsg.style.display = 'block'
    gMsg.innerText = msg
    game.style.opacity = 0.50
    setTimeout(() => {
        gMsg.style.display = 'none'
        game.style.opacity = 1
    }, 2000);
}

const playerMovement = (score) =>{

    // Update current player
    if(turn == 1)   currentPlayer = player1
    else if(turn == 2)  currentPlayer = player2
    else if(turn == 3)  currentPlayer = player3
    else  currentPlayer = player4
        
    // Update active section
    let finalScore = score + currentPlayer.position
    console.log(currentPlayer.position)
    currentPlayer.position >= 32 ? (currentPlayer.position == 32 ? currentPlayer.position = 0 : currentPlayer.position > 32 ? currentPlayer.position = currentPlayer.position + score - 32 : null) : currentPlayer.position += score
    if(finalScore > (sec1Places.length + sec2Places.length + sec3Places.length)){
        activeSection = sec4Places;
        currentPlayer.currentSection = 4;
    }
    else if(finalScore > (sec1Places.length + sec2Places.length)){
        activeSection = sec3Places;
        currentPlayer.currentSection = 3;
    }
    else if(finalScore > sec1Places.length){
        activeSection = sec2Places;
        currentPlayer.currentSection = 2
    }

    // Update User Position
    currentPlayer.position > activeSection.length ? currentPlayer.currentSection++ : (
        placeData = activeSection.slice(finalScore, finalScore+1)[0]
    )
    console.log(placeData)
    currentPosition[currentPlayer.id - 1].innerHTML = placeData.name
    if(placeData.name == 'Income Tax') {
        showMsg('Paid Income Tax ₹500.')
        moneyUpdate(currentPlayer, 'minus', 500)
    }
    else if(placeData.name == 'Wealth Tax'){
        showMsg('Paid Wealth Tax ₹1000.')
        moneyUpdate(currentPlayer, 'minus', 1000)
    }
    else if(placeData.name == 'Jail'){
        showMsg('Paid to Jail ₹6000.')
        moneyUpdate(currentPlayer, 'minus', 600)
    }
    else if(placeData.name == 'Luck'){
        showMsg(luck[score-1].msg)
        if(score == 2){
            moneyUpdate(currentPlayer, 'add', 1500)
            if(player1.id != currentPlayer.id)  moneyUpdate(player1, 'minus', 500)
            else if(player2.id != currentPlayer.id) moneyUpdate(player2, 'minus', 500)
            else if(player3.id != currentPlayer.id) moneyUpdate(player3, 'minus', 500)
            else if(player4.id != currentPlayer.id) moneyUpdate(player4, 'minus', 500)
        }else{
            moneyUpdate(currentPosition, 'add', luck[score-1].charge)
        }
    }
    else if(placeData.name == 'Community Chest'){
        showMsg(communityChest[score-1].msg)
        if(score == 1){
            currentPlayer.currentSection = 1
            currentPlayer.position = 10
            currentPosition[currentPlayer.id - 1].innerHTML = 'Jail'
        }else{
            moneyUpdate(currentPlayer, 'minus', communityChest[score-1].charge)
        }
    }
    else{
        if(activeSection.find(item => item.name == placeData.name).owner == 0){
            buy.disabled = false
        }else{
            let owner
            if(placeData.owner == 1)   owner = player1
            else if(placeData.owner == 2) owner = player2
            else if(placeData.owner == 3) owner = player3
            else if(placeData.owner == 4) owner = player4
            showMsg(`${owner.name} recieved ₹${placeData.rent} from ${currentPlayer.name} as rent of ${placeData.name}`)
            moneyUpdate(currentPlayer, 'minus', placeData.rent)
            moneyUpdate(owner, 'add', placeData.rent)
        }
    }
    turn == 4 ? turn = 1 : turn++
    turnMsg.innerText = `Player ${turn} Turn`
}

const flipDice = () =>{
    diceBtn.disabled = true
    score = Math.floor(Math.random() * 5) + 1
    let date = new Date()
    let target = date.getMilliseconds()+1500
    let currentTime = date.getMilliseconds()
    let i = 1
    const rollDice = setInterval(() => {
        if(currentTime >= target){
            clearInterval(rollDice)
            diceBox.src= `images/${score}.png`
            playerMovement(score)
            diceBtn.disabled = false
        }else{
            diceBox.src= `images/${i}.png`
            i < 6 ? i++ : i = 1
            currentTime += 200
        }
    }, 200);
}

const showResult = () => {
    let py1Total = player1.money
    let py2Total = player2.money
    let py3Total = player3.money
    let py4Total = player4.money

    sec1Places.map(place => {
        if(place.owner == 1)    py1Total += place.price
        else if(place.owner == 2)   py2Total += place.price
        else if(place.owner == 3)   py3Total += place.price
        else if(place.owner == 4)   py4Total += place.price
    })
    sec2Places.map(place => {
        if(place.owner == 1)    py1Total += place.price
        else if(place.owner == 2)   py2Total += place.price
        else if(place.owner == 3)   py3Total += place.price
        else if(place.owner == 4)   py4Total += place.price
    })
    sec3Places.map(place => {
        if(place.owner == 1)    py1Total += place.price
        else if(place.owner == 2)   py2Total += place.price
        else if(place.owner == 3)   py3Total += place.price
        else if(place.owner == 4)   py4Total += place.price
    })
    sec4Places.map(place => {
        if(place.owner == 1)    py1Total += place.price
        else if(place.owner == 2)   py2Total += place.price
        else if(place.owner == 3)   py3Total += place.price
        else if(place.owner == 4)   py4Total += place.price
    })
    let winner = Math.max(py1Total,py2Total,py3Total,py4Total)
    if(winner == py1Total)  showMsg(`${player1.name} wins the game with total ₹${winner}`)
    else if(winner == py2Total) showMsg(`${player2.name} wins the game with total ₹${winner}`)
    else if(winner == py3Total) showMsg(`${player3.name} wins the game with total ₹${winner}`)
    else if(winner == py4Total) showMsg(`${player4.name} wins the game with total ₹${winner}`)

}

const handleBuy = () => {
    if(currentPlayer.money > placeData.price){
        activeSection.find(item => item.name == placeData.name).owner = currentPlayer.id
        unperchasedplacesCount--
        showMsg(`${currentPlayer.name} bought ${placeData.name} for ₹${placeData.price}.`)
        moneyUpdate(currentPlayer, 'minus', placeData.price)
        buy.disabled = true
        if(unperchasedplacesCount == 0){
            showResult()
        }
    }else{
        showMsg(`${currentPlayer.name} don't have enough money to buy ${placeData.name}.`)
        buy.disabled = true
    }
}

const moneyUpdate = (player, action, count) => {
    let currentMoney = player.money
    let totalMoney = 0
    if(action == 'add'){
        totalMoney = player.money + count
        player.money += count
        
    }else{
        totalMoney = player.money - count
        player.money -= count
    }
    diceBtn.disabled = false
    let updateMoney = setInterval(() => {
        if(currentMoney == totalMoney){
            clearInterval(updateMoney)
            currentBalance[player.id - 1].innerHTML = `₹${player.money}`
        }else{
            currentBalance[player.id - 1].innerHTML = `₹${currentMoney}`
            if(action == 'add') currentMoney+=5
            else    currentMoney-=5
        }
    }, 0.1);
}

const handleSubmit = () => {
    if(py1.value != '' && py2.value != '' && py3.value != '' && py4.value != ''){
        player1.name = py1.value
        player2.name = py2.value
        player3.name = py3.value
        player4.name = py4.value
        form.style.display = 'none';
        game.style.display = 'block';
        showGame()
    }else{
        alert('Requires 4 player to play this game.')
    }
}

submit.addEventListener('click', handleSubmit)

buy.addEventListener('click', handleBuy)

diceBtn.addEventListener('click', flipDice)

// window.onload = showGame()