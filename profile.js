const favColors = document.querySelector('#color')
function colors(){
    alert("Esme's favorite colors are blue, yellow, and pink!")
}
favColors.addEventListener('click', colors);

const favPlace = document.querySelector('#place')
function place(){
    alert("Esme's favorite places are the beach and Dodger Stadium!")
}

favPlace.addEventListener('click', place)

const favRit = document.querySelector('#ritual')
function ritual(){
    alert("Esme's favorite ritual is going to the gym in the mornings!")
}
favRit.addEventListener('click', ritual)