const audio = document.getElementById('audio')
const name = document.getElementById('name')
const PlayPause = document.getElementById('playPause')
const start = document.getElementById('start')
const end = document.getElementById('end')
const audioTrek = document.getElementById('audioTrek')
const progressBar = document.getElementById('progressBar')
let playPauseFlag = false

// Audio files
const fileNames = [
    {
        name: 'Ilahi',
        src: '1.mp3'
    },
    {
        name: 'Kabira',
        src: '2.mp3'
    },
    {
        name: 'Badtameez Dil',
        src: '3.mp3'
    },
    {
        name: 'Balam Pichkari',
        src: '4.mp3'
    },
]
let Trek = 0

// Change song function
const ChangeTrek = (no) => {
    audio.src = `audio/${fileNames[no].src}`
    name.innerHTML = fileNames[no].name
    PlayPause.innerText = '>'
    progressBar.style.width = `0%`
    playPauseFlag ? Play() : null
}

// Play function
const Play = () =>{
    PlayPause.innerText = '||'
    audio.play()
    playPauseFlag = true
}

// Pause function
const Pause = () =>{
    PlayPause.innerText = '>'
    audio.pause()
    playPauseFlag = false
}

// Handle Play-Pause
PlayPause.addEventListener('click', ()=>{
    if(PlayPause.innerText == '>'){
        Play()
    }else{
        Pause()
    }
})

// Handle song loading
const handleLoad = ()=>{
    let minutes = Math.floor(audio.duration / 60)
    let seconds = Math.floor(audio.duration % 60)
    end.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    start.innerHTML = `00:00`
}

// Handle Time update
const handleTimeUpdate = (e) => {
    let minutes = Math.floor(e.target.currentTime / 60)
    let seconds = Math.floor(e.target.currentTime % 60)
    start.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

    let spendTime = (e.target.currentTime / e.target.duration) * 100
    progressBar.style.width = `${spendTime}%`
}


audio.addEventListener('loadeddata', () => handleLoad())
audio.addEventListener('timeupdate', (e) => handleTimeUpdate(e))

// Handle change song in end of one song
audio.addEventListener('ended', () => Next())

// Handle change of time on click
audioTrek.addEventListener('click', (c) => {
    let progressBarWidth = audioTrek.clientWidth
    let offsetX = c.offsetX
    let totalDuration = audio.duration
    
    audio.currentTime = (offsetX / progressBarWidth) * totalDuration
})

// Previous function
const Prev = ()=>{
    if(Trek > 0){
        Trek--
        ChangeTrek(Trek)
    }else{
        Trek = fileNames.length-1
        ChangeTrek(Trek)
    }
}

// Next function
const Next = ()=>{
    if(Trek < fileNames.length-1){
        Trek++
        ChangeTrek(Trek)
    }else{
        Trek = 0
        ChangeTrek(Trek)
    }
}

window.onload = ChangeTrek(Trek)