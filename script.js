let theinput = document.getElementById('the-input');
let allspan = document.querySelectorAll('.buttons span');
let results = document.querySelector('.result span')


allspan.forEach(span =>{
    span.addEventListener('click' , (e)=>{
        if(e.target.classList.contains('check-item')){
            checkitem()
            theinput.value = ''
        }
        if(e.target.classList.contains('add-item')){
            additem()
            theinput.value = ''
        }
        if(e.target.classList.contains('delete-item')){
            deleteitem()
            theinput.value = ''
        }
        if(e.target.classList.contains('show-item')){
            showitem()
            theinput.value = ''
        }
    })
})

function checkinput(){
    if(theinput.value === ""){
        results.innerHTML = 'The Input Can Not Be Empty'
    }
}

function checkitem(){
    if(theinput.value !==''){
        if(localStorage.getItem(theinput.value)){
           results.innerHTML = `Found Local Storage Item Called <span>${theinput.value}</span>`
        }else{
            results.innerHTML = `No Local Storage Item With Name <span>${theinput.value}</span>`
        }
    }else{
        checkinput()
    }
}

function additem(){
    if(theinput.value !==''){
        localStorage.setItem(theinput.value , 'test')
        results.innerHTML = `Local Storage Item Called <span>${theinput.value} </span> Added`

    }
    else{
        checkinput()
    }
}

function deleteitem(){
    if(theinput.value !==''){
        if(localStorage.getItem(theinput.value)){
            localStorage.removeItem(theinput.value)
            results.innerHTML = `Local Storage Item Called <span>${theinput.value} </span> Deleted` 
        }
    }
    else{
        checkinput()
    }
}

function showitem(){
    if(localStorage.length){
        results.innerHTML='';
        for(let[key , value] of Object.entries(localStorage)){
            results.innerHTML += `<span>${key}</span> <br>`
        }
    }
    else{
        results.innerHTML=`Local Storage Is Empty`
    }
}
