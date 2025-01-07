const timer__milliseconds = document.querySelector('.timer__milliseconds')
const timer__seconds = document.querySelector('.timer__seconds')
const timer__Minutes = document.querySelector('.timer__minutes')


let savedTime = 0
let cancelId ;
let startTime;



function startTimer (){
startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}
function stopTimer (){
savedTime = savedTime + Date.now() - startTime
cancelAnimationFrame(cancelId)
}
function resetTimer (){
startTime = Date.now()
savedTime = 0
timer__milliseconds.innerHTML = '000'
 timer__seconds.innerHTML = '00'
timer__Minutes.innerHTML = '00'
}
function updateTimer (){
    let MilliElapsed = savedTime + Date.now() - startTime +50000 ;
    let MilliText = MilliElapsed % 1000;
    if (MilliText.toString().length === 1) {
        MilliText = '0' + MilliText;
    }
    let secondsElapsed = MilliElapsed / 1000;
    let secondsText = Math.floor(secondsElapsed % 60);
    if (secondsText.toString().length === 1) {
        secondsText = '0' + secondsText
    }
    
let MinutesElapsed = secondsElapsed / 60
let MinutesText = Math.floor(MinutesElapsed)
if (MinutesText.toString().length < 2) {
    MinutesText.toString().padStart(2 , '0')
}

    
    
    timer__milliseconds.innerHTML = MilliText
    timer__Minutes.innerHTML = MinutesText
    timer__seconds.innerHTML = secondsText
    cancelId = requestAnimationFrame(updateTimer)
}