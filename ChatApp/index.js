const input = document.getElementById('input')
const send = document.getElementById('send')
const chatBox = document.getElementById('chat-box')
const user1 = document.getElementById('user1')
const user2 = document.getElementById('user2')
let activeUser = 0
const data = []
let date = new Date()

// Show Chat
const showList = () => {
    let finaList = ''
    let currentTime = `${date.getHours() < 10 ?"0":""}${date.getHours()}:${date.getMinutes() < 10 ?"0":""}${date.getMinutes()} ${date.getHours() >= 12 ? 'pm' : 'am'}`
    data.forEach(val =>{
        if(val.user == activeUser){
            finaList += `<div class="s-msg">${val.msg}<sub>${currentTime}<sub></div>`
        }else{
            finaList += `<div class="r-msg">${val.msg}<sub>${currentTime}<sub></div>`
        }
    })
    chatBox.innerHTML = finaList
}

// Change active user to 0
user1.addEventListener('click',()=>{
    activeUser = 0
    if(!user1.classList.contains('active')){
        user1.classList.add('active')
        user2.classList.remove('active')
    }
    showList()
})

// Change active user to 1
user2.addEventListener('click',()=>{
    activeUser = 1
    if(!user2.classList.contains('active')){
        user2.classList.add('active')
        user1.classList.remove('active')
    }
    showList()
})

// Onclick submit event
send.addEventListener('click', ()=>{
    addMsg()
})


// Add Msg
const addMsg = () => {
    if(input.value != ''){
        data.push({user: activeUser,msg: input.value})
        input.value = ''
        showList()
    }
}

window.onload = showList()