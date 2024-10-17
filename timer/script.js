let si;//объявление глобальной переменной
let count;
let pause;
let sounds=['sound00.mp3','sound01.mp3','sound02.mp3'];
let n=-1;



function startTimer(){
    //alert("start")
    //let si;//объявляем новую переменную локальную
    si=setInterval(tick,1000);    
    let elementInputTimer=document.getElementById('input-timer')
    count=elementInputTimer.value;    
    console.log(count);
    pause=false;
}

function pauseTimer(){
    //alert("pause")
    
    if (pause==true)
    {
        si=setInterval(tick,1000);    
        pause=false;
    }
    else
    {
        clearInterval(si);
        pause=true;
    }
}

function tick()
{
    if (count<=0) stopTimer();
    else{
        count=count-1;
        console.log(count);
        let elementTimer=document.getElementById("timer");
        elementTimer.textContent=count;
    }
}

function stopTimer()
{    
    if (n<2)
        n=n+1;
    else
        n=0;
    clearInterval(si);
    let audio=new Audio('sounds/'+sounds[n]);
    audio.play();
}
