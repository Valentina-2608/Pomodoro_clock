/* Script */

let btn_pomodoro = document.getElementById('btn_pomodoro');
let btn_short_break = document.getElementById('btn_short_break');
let btn_long_break = document.getElementById('btn_long_break');
let main = document.querySelector('.main');
let fon = document.querySelector('.fon');

let timer1 = document.querySelector('.timer1');
let timer2 = document.querySelector('.timer2');
let timer3 = document.querySelector('.timer3');

btn_short_break.addEventListener('click', shortBreakChanges);

function shortBreakChanges(){
    fon.classList.remove('fon_timer1');
    fon.classList.remove('fon_timer3');
    fon.classList.add('fon_timer2');
    main.style.backgroundColor = '#45538B';
    btn_short_break.style.backgroundColor = '#6474B3';
    btn_long_break.style.backgroundColor = '#8B9BDC';
    btn_pomodoro.style.backgroundColor = '#8B9BDC';
    timer1.style.display = 'none';
    timer2.style.display = 'block';
    timer3.style.display = 'none';
}




btn_long_break.addEventListener('click', longBreakChanges);

function longBreakChanges(){
    fon.classList.remove('fon_timer1');
    fon.classList.remove('fon_timer2');
    fon.classList.add('fon_timer3');
    main.style.backgroundColor = '#1D7074';
    btn_short_break.style.backgroundColor = '#5DC8CD';
    btn_long_break.style.backgroundColor = '#006064';
    btn_pomodoro.style.backgroundColor = '#5DC8CD';

    timer1.style.display = 'none';
    timer2.style.display = 'none';
    timer3.style.display = 'block';
}




btn_pomodoro.addEventListener('click', pomodoroChanges);

function pomodoroChanges(){
    fon.classList.remove('fon_timer2');
    fon.classList.remove('fon_timer3');
    fon.classList.add('fon_timer1');
    main.style.backgroundColor = '#984703';
    
    btn_short_break.style.backgroundColor ='#F3AD73';
    btn_long_break.style.backgroundColor = '#F3AD73';
    btn_pomodoro.style.backgroundColor = '#F39445';

    timer1.style.display = 'block';
    timer2.style.display = 'none';
    timer3.style.display = 'none';
    
}


/* Timers */

function startTimer(timer_minutes, timer_seconds, start, pause, number1, number2){
  
    let time_start = Number(timer_minutes.value) * 60 + Number(timer_seconds.value);
    start.style.display = 'none';
    pause.style.display = 'block';
    let myAudio = document.querySelector('#audio');


    let updateTime = setInterval(function(){
        let minutes_Changed = Math.floor(time_start/60);
        let seconds_Changed = time_start % 60;
        if (seconds_Changed < 10 ) {
            timer_seconds.value = '0'+ seconds_Changed;
        } else{
            timer_seconds.value = seconds_Changed;
        }
        if (minutes_Changed < 10 ) {
            timer_minutes.value =  '0'+ minutes_Changed;
        } else{
            timer_minutes.value =  minutes_Changed;
        }

        if(timer_minutes.value === '00' && timer_seconds.value === '00'){

            clearInterval(updateTime);
            myAudio.play();
            setTimeout(() =>{
                start.style.display = 'block';
                pause.style.display = 'none'; 
                timer_minutes.value = number1
                timer_seconds.value = number2;
               
            }, 3000)   

         }
        time_start--;

    }, 1000);


      
    pause.addEventListener('click', pauseTimer);
   
    function pauseTimer(){
        start.style.display = 'block';
        pause.style.display = 'none';
        clearInterval(updateTime);
    }
}



/* Timer Pomodoro */



let start_pomodoro = document.getElementById('start_pomodoro');
let pause_pomodoro = document.getElementById('pause_pomodoro');
let timer1_minutes = document.getElementById('timer1_minutes');
let timer1_seconds = document.getElementById('timer1_seconds');

start_pomodoro.addEventListener('click', () => {
    startTimer(timer1_minutes, timer1_seconds, start_pomodoro, pause_pomodoro, 5, 0);
});



/* Timer Short Break */
let start_short_break = document.getElementById('start_short_break');
let pause_short_break = document.getElementById('pause_short_break');
let timer2_minutes = document.getElementById('timer2_minutes');
let timer2_seconds = document.getElementById('timer2_seconds');


start_short_break.addEventListener('click', () => {
    startTimer(timer2_minutes, timer2_seconds, start_short_break, pause_short_break, 5, 0);
});



/* Timer Long Break */
let start_long_break = document.getElementById('start_long_break');
let pause_long_break = document.getElementById('pause_long_break');
let timer3_minutes = document.getElementById('timer3_minutes');
let timer3_seconds = document.getElementById('timer3_seconds');


start_long_break.addEventListener('click', () => {
    startTimer(timer3_minutes, timer3_seconds, start_long_break, pause_long_break, 3, 0);
});




