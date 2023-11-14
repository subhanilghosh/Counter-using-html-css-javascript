let minus = document.getElementById('minus');
let reset = document.getElementById('reset');
let plus = document.getElementById('plus');
let score = document.getElementById('score');

let counter = 0;

minus.addEventListener('click',function(e){
    counter -= 1;
    score.innerText = counter;
});

reset.addEventListener('click',function(e){
    counter = 0;
    score.innerText = counter;    
});

plus.addEventListener('click',function(e){
    counter += 1;
    score.innerText = counter;
});