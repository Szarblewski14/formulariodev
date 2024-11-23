const form   = document.querySelector('#form')
const campos = document.querySelectorAll('.required')
const spans  = document.querySelectorAll('.danger')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    nameValidate()
    emailValidate()
    phoneValidate()
})



function setError(i){
    campos[i].style.border = '2px solid #e63636'
    spans[i].style.display = 'block'
}

function removeError(i){
    campos[i].style.border = '2px solid #7CFC00'
    spans[i].style.display = 'none'
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0)
        
    }
    else {
        removeError(0)
        
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1)
        
    }
    else {
        removeError(1)
        
    }
}

function phoneValidate(){
    if(campos[2].value.length < 11){
        setError(2)
        
    }
    else {
        removeError(2)
        
    }
}