/* Script */

let btn_pomodoro = document.querySelector('.btn_pomodoro');
let btn_short_break = document.querySelector('.btn_short_break');
let btn_long_break = document.querySelector('.btn_long_break');
let main = document.querySelector('.main');
let fon = document.querySelector('.fon');

let block_timer1 = document.querySelector('.block_timer1');
let block_timer2 = document.querySelector('.block_timer2');
let block_timer3 = document.querySelector('.block_timer3');

btn_short_break.addEventListener('click', buttonShortBreakActive);

function buttonShortBreakActive(){
    block_timer1.style.display = 'none';
    block_timer2.style.display = 'block';
    block_timer3.style.display = 'none';
    main.style.backgroundColor = '#45538B';
    btn_short_break.classList.add('btn_short_break_active');
    btn_long_break.classList.remove('btn_long_break_active');
    btn_pomodoro.classList.remove('btn_pomodoro_active');
   
}

btn_long_break.addEventListener('click', buttonLongBreakActive);

function buttonLongBreakActive(){
    block_timer1.style.display = 'none';
    block_timer2.style.display = 'none';
    block_timer3.style.display = 'block';
    main.style.backgroundColor = '#1D7074';
    btn_short_break.classList.remove('btn_short_break_active');
    btn_long_break.classList.add('btn_long_break_active');
    btn_pomodoro.classList.remove('btn_pomodoro_active');
}



btn_pomodoro.addEventListener('click', buttonPomodoroActive);

function buttonPomodoroActive(){
    block_timer1.style.display = 'block';
    block_timer2.style.display = 'none';
    block_timer3.style.display = 'none';
    main.style.backgroundColor = '#984703';
    btn_short_break.classList.remove('btn_short_break_active');
    btn_long_break.classList.remove('btn_long_break_active');
    btn_pomodoro.classList.add('btn_pomodoro_active');
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
    startTimer(timer1_minutes, timer1_seconds, start_pomodoro, pause_pomodoro, 25, 0);
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
    startTimer(timer3_minutes, timer3_seconds, start_long_break, pause_long_break, 15, 0);
});





/* Move to Pomodoro */
let count2 = 0;
start_short_break.addEventListener('click', function(){
    if (btn_short_break.classList.contains('btn_short_break_active')){
        ++count2;
  }
  console.log(count2);
  if (count2>=1 &&  count2<=3){
    setTimeout(() => {
        buttonPomodoroActive();
        count2 = 0;
    },69000)
}
});



/* Move to Pomodoro */

start_long_break.addEventListener('click', function(){
    if (btn_long_break.classList.contains('btn_long_break_active')){
        setTimeout(() => {
            buttonPomodoroActive();
        },69000)
    }
});


/* Move to Break */
let count1 = 0;
start_pomodoro.addEventListener('click', function(){
    if (btn_pomodoro.classList.contains('btn_pomodoro_active')){
    ++count1;
    }
    console.log(count1);
    if (count1>=1 && count1<=3){
        setTimeout(() => {
            buttonShortBreakActive();
        },69000)
    }
       if (count1 === 4){
            setTimeout(() => {
                buttonLongBreakActive();
                count1 = 0;
            },69000)
        }
})



