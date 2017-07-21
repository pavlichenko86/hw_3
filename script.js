const index = document.getElementsByClassName('index');
const name = document.getElementsByClassName('name');
let myArray = ["apple", "ananas", "orange"];
let myDiv = document.getElementById('new');

function myFun(){
    showResult(myArray);
}
function myFun1(){
    myArray.pop();
}
function myFun2(){
    myArray.push(name.text.value);
}
function myFun3(){
    myArray.shift();
}

function myFun4(){
    myArray.unshift(name.text.value);
}

 function showResult(res){
    myDiv.innerHTML = myArray;
 }

let ok = document.querySelector('input[name="ok"]');
ok.addEventListener('click', myFun);

let pop = document.querySelector('input[name="pop"]');
pop.addEventListener('click', myFun1);

let push = document.querySelector('input[name="push"]');
push.addEventListener('click', myFun2);

let shift = document.querySelector('input[name="shift"]');
shift.addEventListener('click', myFun3);

let unshift = document.querySelector('input[name="unshift"]');
unshift.addEventListener('click', myFun4);