const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const amHours = String(date.getHours()).padStart(2, 0)
    const pmHours = String(date.getHours()-12).padStart(2, 0)
    const Minutes = String(date.getMinutes()).padStart(2, 0)
    const Seconds = String(date.getSeconds()).padStart(2, 0)
    
    if(amHours >= 12){
    clock.innerText = `PM ${pmHours}:${Minutes}:${Seconds}`;
    } else {
        clock.innerText = `AM ${amHours}:${Minutes}:${Seconds}`;
    }
}


getClock();
setInterval(getClock, 1000);