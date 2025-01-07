const timer__milliseconds = document.querySelector('.timer__milliseconds')
const timer__seconds = document.querySelector('.timer__seconds')
const timer__minutes = document.querySelector('.timer__minutes')


let savedTime=0
let startTime;
let cancelId;


function startTimer (){
startTime = Date.now()

    cancelId = requestAnimationFrame(updateTimer)
}
function stopTimer (){
    savedTime = savedTime + Date.now() - startTime
cancelAnimationFrame(cancelId)
}
function resetTimer (){
savedTime = 0
startTime = Date.now()
    timer__milliseconds.innerHTML = '000'
    timer__seconds.innerHTML = '00'
    timer__minutes.innerHTML = '00'
}
function updateTimer (){
let millisElapsed = savedTime + Date.now() - startTime
let millisText = millisElapsed % 1000
if (millisText.toString().length === 2) {
    millisText = '0' + millisText
}
let secondsElapsed = millisElapsed / 1000
let secondsText = Math.floor(secondsElapsed % 60)
if (secondsText.toString().length < 2) {
    secondsText = secondsText.toString().padStart(2 , '0')
}
let minutesElapsed = secondsElapsed / 60
let minutesText = Math.floor(minutesElapsed)
if (minutesText.toString().length < 2) {
    minutesText = minutesText.toString().padStart(2 , '0')
}


timer__milliseconds.innerHTML = millisText
timer__seconds.innerHTML = secondsText
timer__minutes.innerHTML = minutesText
 cancelId = requestAnimationFrame(updateTimer)
}