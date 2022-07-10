const boxes= document.querySelectorAll('.box');
const mole= document.querySelector('.mole');

const time= document.querySelector('#time-left');
const score= document.querySelector('#current_score');

let curr=0;
let smacked= null;
let timepass = 30;
let timer= null;

function molebox(){
    boxes.forEach( box => {
        box.classList.remove('mole');
    })

    let molePos = boxes[ Math.floor (Math.random() * 9)];
    molePos.classList.add('mole');

    smacked= molePos.id;
}

boxes.forEach( box =>{
    box.addEventListener('click', ()=>{
        if(box.id=== smacked){
            curr++;
            score.textContent = curr;
            smacked=null;
        }
    })
})

function getMole(){
    timer = setInterval(molebox, 600);
}

getMole();

function timerCount(){
    timepass--;
    time.textContent = timepass;

    if(timepass===0){
        clearInterval(timerid);
        clearInterval(timer);
        alert('Game Over!');
    }

}

let timerid= setInterval(timerCount, 1000);
