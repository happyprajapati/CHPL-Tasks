// const todo = document.getElementById('todo')
const input = document.getElementById('input')
const add = document.getElementById('add')
const list = document.getElementById('list')
const data = []

// Show data
const showList = () => {
    let finaList = ''
    data.forEach(val =>{
        let newVal = val.replaceAll('\n', '<br/>')
        finaList += `<div id="data" class="flex">
                        <div id="value">${newVal}</div>
                        <div>
                            <button onClick='updateData("${newVal}")'>Edit</button>
                            <button onClick='deleteData("${newVal}")'>X</button>
                        </div>
                    </div>`
    })
    list.innerHTML = finaList
}

// Onclick submit event
add.addEventListener('click', ()=>{
    addData()
})


// Add Data
const addData = () => {
    data.unshift(input.value)
    input.value = ''
    showList()
}

// Update Data
const updateData = (val) => {
    input.value = val
    let index = data.indexOf(val)
    data.splice(index, 1)
    showList()
}

// Delete Data
const deleteData = (val) => {
    let index = data.indexOf(val)
    data.splice(index, 1)
    showList()
}
