/* Script */

let btn_pomodoro = document.getElementById('btn_pomodoro');
let btn_short_break = document.getElementById('btn_short_break');
let btn_long_break = document.getElementById('btn_long_break');
let main = document.querySelector('.main');
let fon1 = document.querySelector('.fon1');
let fon2 = document.querySelector('.fon2');
let fon3 = document.querySelector('.fon3');


btn_short_break.addEventListener('click', shortBreakChanges);

function changeFonSecond(){
    fon1.style.display = 'none';
    main.style.backgroundColor = '#45538B';
    fon2.style.display = 'block';
    fon2.style.backgroundColor = '#8B9BDC';
    btn_short_break.style.backgroundColor = '#6474B3';
    btn_long_break.style.backgroundColor = '#8B9BDC';
    btn_pomodoro.style.backgroundColor = '#8B9BDC';
}