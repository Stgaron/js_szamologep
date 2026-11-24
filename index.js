const szamok2 = document.getElementsByClassName("szamok")
const muveletek = document.getElementsByClassName("muvelet")
const mutatoresz = document.getElementById("kiiroresz")
const torlesElem = document.getElementById("torles")
const egyenloElem= document.getElementById("egyenlo")
let elsoszamjegyszovege = ""
let masodikszamjegyszovege = ""
let muvelet = ""


for(let i = 0;i< szamok2.length;i++){
    szamok2[i].addEventListener("click", kiiras)
}
for(let j = 0;j<muveletek.length;j++){
    muveletek[j].addEventListener("click", muveletek1)
}
for(let k = 0;k< szamok2.length;k++){
    szamok2[k].addEventListener("click", kiiras2)
}

function kiiras(){
    elsoszamjegyszovege = event.target.id
    console.log(elsoszamjegyszovege)
    mutatoresz.value += elsoszamjegyszovege
}
function muveletek1(){
    muvelet = event.target.textContent
    console.log(muvelet)
    mutatoresz.value += muvelet
}
torlesElem.addEventListener("click",torles2)
function torles2(){
    mutatoresz.value = ""
}



