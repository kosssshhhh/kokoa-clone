const time = document.querySelector(".status-bar__column:nth-child(2) span");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');

    time.innerText = `${hours}:${minutes}`
}

getClock();
setInterval(getClock, 1000);