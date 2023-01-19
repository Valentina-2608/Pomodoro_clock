/* Script */

let btn_pomodoro = document.getElementById('btn_pomodoro');
let btn_short_break = document.getElementById('btn_short_break');
let btn_long_break = document.getElementById('btn_long_break');
let main = document.querySelector('.main');
let fon1 = document.querySelector('.fon1');
let fon2 = document.querySelector('.fon2');
let fon3 = document.querySelector('.fon3');



btn_short_break.addEventListener('click', shortBreakChanges);

function shortBreakChanges(){
    fon1.style.display = 'none';
    fon3.style.display = 'none';
    main.style.backgroundColor = '#45538B';
    fon2.style.display = 'block';
    fon2.style.backgroundColor = '#8B9BDC';
    btn_short_break.style.backgroundColor = '#6474B3';
    btn_long_break.style.backgroundColor = '#8B9BDC';
    btn_pomodoro.style.backgroundColor = '#8B9BDC';
}




btn_long_break.addEventListener('click', longBreakChanges);

function longBreakChanges(){
    fon1.style.display = 'none';
    fon2.style.display = 'none';
    fon3.style.display = 'block';
    main.style.backgroundColor = '#1D7074';
    fon3.style.backgroundColor = '#5DC8CD';
    btn_short_break.style.backgroundColor = '#5DC8CD';
    btn_long_break.style.backgroundColor = '#006064';
    btn_pomodoro.style.backgroundColor = '#5DC8CD';
}




btn_pomodoro.addEventListener('click', pomodoroChanges);

function pomodoroChanges(){
    fon2.style.display = 'none';
    fon3.style.display = 'none';
    main.style.backgroundColor = '#984703';
    fon1.style.display = 'block';
    fon1.style.backgroundColor = '#F3AD73';
    btn_short_break.style.backgroundColor ='#F3AD73';
    btn_long_break.style.backgroundColor = '#F3AD73';
    btn_pomodoro.style.backgroundColor = '#F39445';
}
