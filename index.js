//document.getElementById("count-el").innerText = 5
let count =0
let countEl = document.getElementById("count-el")
let paraEl = document.getElementById("para-el")
document.getElementById("increment-btn").addEventListener("click", inc)
document.getElementById("decrement-btn").addEventListener("click", dec)
document.getElementById("save-btn").addEventListener("click", save)
document.getElementById("reset-btn").addEventListener("click", reset)

function inc(){
    count+=1
    countEl.innerText = count
}
function dec(){
    if(count!= 0){
        count-=1
        countEl.innerText = count
    }
}

function save(){
    paraEl.textContent += count +" - "
}
function reset(){
    count=0
    countEl.innerText= count
}