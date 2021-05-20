let change = document.querySelector('.change')

let changes = ['Customer Service Extraordinaire', 'Movie Lover', 'Cyber Security Enthusiast', 'Full Stack Web Developer']
let place = 0

function changeSpan(){
    change.innerText = changes[place]
    if(place === (changes.length-1)){
        place = 0
    } else {
        place++
    }
}

setInterval(changeSpan, 3000)