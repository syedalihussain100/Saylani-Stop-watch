
// var count = 0;
// var interval;

// function timer(){
//     count ++;
// console.log(count);
// }

// interval =  setInterval(timer,1000)


// function timeout(){
//   clearInterval(interval)
// }

// setTimeout(timeout,7000)


var min = 0;
var sec = 0;
var msec = 0;
var mainHeading = document.getElementById("min");
var secondHeading = document.getElementById("sec");
var thirdHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    thirdHeading.innerHTML = msec;

    if(msec >= 100){
     sec++
     secondHeading.innerHTML = sec;
     msec = 0;
    }else if(sec >= 60){
        min++
        mainHeading.innerHTML = min
        sec = 0;

    }
}

function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;

    mainHeading.innerHTML = min;
    secondHeading.innerHTML = sec;
    thirdHeading.innerHTML = msec;
    stop()
}

