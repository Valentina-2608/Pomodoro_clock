/* Script */

let btn_pomodoro = document.getElementById('btn_pomodoro');
let btn_short_break = document.getElementById('btn_short_break');
let btn_long_break = document.getElementById('btn_long_break');
let main = document.querySelector('.main');
let fon = document.querySelector('.fon');

let timer1 = document.getElementById('timer1');
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


    timer2.style.display = 'none';
    timer3.style.display = 'none';
    timer1.style.display = 'block';
}


/* Timers */

/* Timer Pomodoro */



let start_pomodoro = document.getElementById('start_pomodoro');
let pause_pomodoro = document.getElementById('pause_pomodoro');

start_pomodoro.addEventListener('click', startTimer1);

function startTimer1(){
   
    let timer1_minutes = document.getElementById('timer1_minutes');
    let timer1_seconds = document.getElementById('timer1_seconds');
    let time1_start = Number(timer1_minutes.value) * 60 + Number(timer1_seconds.value);
    start_pomodoro.style.display = 'none';
    pause_pomodoro.style.display = 'block';
    let myAudio = document.querySelector('#audio')


    let updateTime1 = setInterval(function(){
        let minutes1_Changed = Math.floor(time1_start/60);
        let seconds1_Changed = time1_start % 60;
        if (seconds1_Changed < 10 ) {
            timer1_seconds.value = '0'+ seconds1_Changed;
        } else{
            timer1_seconds.value = seconds1_Changed;
        }
        if (minutes1_Changed < 10 ) {
            timer1_minutes.value =  '0'+ minutes1_Changed;
        } else{
            timer1_minutes.value =  minutes1_Changed;
        }

        if(timer1_minutes.value === '00' && timer1_seconds.value === '00'){

            clearInterval(updateTime1);
            myAudio.play();
            setTimeout(() =>{
                start_pomodoro.style.display = 'block';
                pause_pomodoro.style.display = 'none'; 
                timer1_minutes.value = '25';
                timer1_seconds.value = '00';
               
            }, 2000)   

         }
        time1_start--;

    }, 1000);


      
    pause_pomodoro.addEventListener('click', pauseTimer1);
   
    function pauseTimer1(){
        start_pomodoro.style.display = 'block';
        pause_pomodoro.style.display = 'none';
        clearInterval(updateTime1);
    }
}




/* Timer Short Break */
let start_short_break = document.getElementById('start_short_break');
let pause_short_break = document.getElementById('pause_short_break');

start_short_break.addEventListener('click', startTimer2);

function startTimer2(){
   
    let timer2_minutes = document.getElementById('timer2_minutes');
    let timer2_seconds = document.getElementById('timer2_seconds');
    let time2_start = Number(timer2_minutes.value) * 60 + Number(timer2_seconds.value);
    start_short_break.style.display = 'none';
    pause_short_break.style.display = 'block';
    let myAudio = document.querySelector('#audio')


    let updateTime2 = setInterval(function(){
        let minutes2_Changed = Math.floor(time2_start/60);
        let seconds2_Changed = time2_start % 60;
        if (seconds2_Changed < 10 ) {
            timer2_seconds.value = '0'+ seconds2_Changed;
        } else{
            timer2_seconds.value = seconds2_Changed;
        }
        if (minutes2_Changed < 10 ) {
            timer2_minutes.value =  '0'+ minutes2_Changed;
        } else{
            timer2_minutes.value =  minutes2_Changed;
        }

        if(timer2_minutes.value === '00' && timer2_seconds.value === '00'){

            clearInterval(updateTime2);
            myAudio.play();
            setTimeout(() =>{
                start_short_break.style.display = 'block';
                pause_short_break.style.display = 'none'; 
                timer2_minutes.value = '5';
                timer2_seconds.value = '00';
                window.location.href = '#timer1';
            }, 3000)   ;

            setTimeout(() =>{
                timer2.style.display = 'none';
                timer1.style.display = 'block';
            }, 4000)   


         }
        time2_start--;

    }, 1000);


      
    pause_short_break.addEventListener('click', pauseTimer2);
   
    function pauseTimer2(){
        start_short_break.style.display = 'block';
        pause_short_break.style.display = 'none';
        clearInterval(updateTime2);
    }
}







