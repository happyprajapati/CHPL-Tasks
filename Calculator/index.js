const result = document.getElementById('result')
const buttons = document.querySelectorAll('.key')

const getAns = (val) => {
    if(val.innerText == '=')    try{ result.value = parseFloat(eval(result.value))} catch(e){ result.value = 'Syntax Error'}
    else if(val.innerText == 'CL')  result.value = ''
    else if(val.innerText == 'DL')  result.value = result.value.substring(0,result.value.length - 1)
    else if(val.innerText == '0' && result.value == '') result.value = ''
    else    result.value += val.innerText
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => getAns(btn))
})