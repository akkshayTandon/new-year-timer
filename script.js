    /* Audio Logic */
// let audio = document.getElementById("audio");
// audio.src = "sound.mp3"; 
// audio.play();
// audio.loop = true;

    /* Timer Logic */
let gap;
const countdown = () => {
    const countDate = new Date("January 1,2026 00:00:00").getTime();
    const now = new Date().getTime();
     gap = countDate - now;

    //how time works
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Calculate 
const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

//Update in HTML
document.querySelector('.day').innerText = textDay;
document.querySelector('.hour').innerText = textHour;
document.querySelector('.minute').innerText = textMinute;
document.querySelector('.second').innerText = textSecond;

};

// console.log(gap);

//Update every second
setInterval(countdown,1000);

// function launch(){
//     document.querySelector('.coming-soon').innerHTML = 
//         `<img class="waiting" src="https://media.istockphoto.com/photos/happy-new-year-2022-picture-id1355894965" alt="error showing image">`;
//     document.querySelector('.waiting').style.height = 100vh; 
// }
