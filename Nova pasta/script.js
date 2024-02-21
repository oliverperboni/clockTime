
let min
let timer
let watch
let hour
let timerSec
let sec = 1500
let pause = true
let watchTimer = true

function update(){
    const clock = document.getElementById("clock")    
    min = Math.floor(sec/60)
    timerSec = sec%60   
    clock.textContent = `${String(min).padStart(2, '0')}:${String(timerSec).padStart(2, '0')}`;
}


function hello(){
    console.log("hello")
}
function start() {
    pause = !pause
    watchTimer= true
    console.log("WATCH : "+watchTimer);
    console.log("PAUSE : "+pause);
    timer = setInterval(function () {
    if(!pause) {
        if (sec >0) {
                update()
                decrement();
            }else if(sec == 0){
                reset();
                alert('Pomodoro session completed!');
            }
            
        }else{
            clearInterval(timer)
        }
    },1000)
}

//for the hour configuration
function decrement() {
    sec--
    
}
function setBreak(type){
    if(type === "short"){
        watchTimer= true
        pause = true
        sec = 300
    }else if(type === "long"){
        watchTimer= true
        pause = true
        sec = 900
    }
    update()

}
function reset() {
    clearInterval(watch)
    clearInterval(timer)
    sec = 1500
    update()
}
function watchMode() {
    watchTimer = !watchTimer
    pause =  true
    console.log("WATCH : "+watchTimer);
    console.log("PAUSE : "+pause);
        watch = setInterval(() => {
            if(!watchTimer){
            let currentdate = new Date()
            hour= currentdate.getHours()
            min= currentdate.getMinutes()
            timerSec= currentdate.getSeconds()
            clock.textContent = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(timerSec).padStart(2, '0')}`;
            }else{
                
                clearInterval(watch)
            }
        }, 1000);

    
    
}