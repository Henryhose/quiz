//QUESTION 1
const Opt1 = document.getElementById('opt1');
const Opt2 = document.getElementById('opt2');
const Opt3 = document.getElementById('opt3');
const Opt4 = document.getElementById('opt4');
let sc1=0;

Opt1.addEventListener('click',function(){
    Opt1.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    
    return;
})
Opt2.addEventListener('click',function(){
    Opt2.style.backgroundColor = "green";
    alert('you choosed the correct option');
    sc1=1;
    return;

})

Opt3.addEventListener('click',function(){
    Opt3.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

Opt4.addEventListener('click',function(){
    Opt4.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

//QUESTION 2
const Opt5 = document.getElementById('opt5');
const Opt6 = document.getElementById('opt6');
const Opt7 = document.getElementById('opt7');
const Opt8 = document.getElementById('opt8');
let sc2=0;

Opt5.addEventListener('click',function(){
    Opt5.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})
Opt6.addEventListener('click',function(){
    Opt6.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

Opt7.addEventListener('click',function(){
    Opt7.style.backgroundColor = "green";
    alert('you choosed the correct option');
    sc2=1;
    return;
})

Opt8.addEventListener('click',function(){
    Opt8.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})



//QUESTION 3
const Opt9 = document.getElementById('opt9');
const Opt10 = document.getElementById('opt10');
const Opt11 = document.getElementById('opt11');
const Opt12 = document.getElementById('opt12');
let sc3=0;


Opt9.addEventListener('click',function(){
    Opt9.style.backgroundColor = "green";
    alert('you choosed the correct option');
    sc3=1;
    return;
})
Opt10.addEventListener('click',function(){
    Opt10.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

Opt11.addEventListener('click',function(){
    Opt11.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

Opt12.addEventListener('click',function(){
    Opt12.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

//QUESTION 4
const Opt13 = document.getElementById('opt13');
const Opt14 = document.getElementById('opt14');
const Opt15 = document.getElementById('opt15');
const Opt16 = document.getElementById('opt16');
let sc4=0;

Opt13.addEventListener('click',function(){
    Opt13.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})
Opt14.addEventListener('click',function(){
    Opt14.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

Opt15.addEventListener('click',function(){
    Opt15.style.backgroundColor = "red";
    alert('you choosed the wrong option');
    return;
})

Opt16.addEventListener('click',function(){
    Opt16.style.backgroundColor = "green";
    alert('you choosed the correct option');
    sc4=1;
    return;
})


//SCORE
scrbtn.addEventListener('click',function(){
    const total = sc1+sc2+sc3+sc4;
    scr.textContent = total;
})



