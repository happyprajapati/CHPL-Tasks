const input = document.getElementById('input')
const send = document.getElementById('send')
const chatBox = document.getElementById('chat-box')
const data = []

const showList = () => {
    let finaList = ''
    let date = new Date()
    let currentTime = `${date.getHours() < 10 ?"0":""}${date.getHours()}:${date.getMinutes() < 10 ?"0":""}${date.getMinutes()} ${date.getHours() >= 12 ? 'pm' : 'am'}`
    console.log(currentTime) 
    data.forEach(val =>{
        let newVal = val.replaceAll('\n', '<br/>')
        finaList += `<div class="msg">${newVal}<sub>${currentTime}<sub></div>`
    })
    chatBox.innerHTML = finaList
}

// Onclick submit event
send.addEventListener('click', ()=>{
    addMsg()
})


// Add Msg
const addMsg = () => {
    data.push(input.value)
    input.value = ''
    showList()
}

window.onload = showList()