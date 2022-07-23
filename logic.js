


var second = 0;
var minute = 0;
var hour = 0;

var d = new Date();
//  this will help to get the current date and time 


setInterval(
    function () {
        d = new Date();

        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute / 12);
        // in hour case we will have to do some extra part, which will help us to make the hour hand move in live mode and not get remain stucked at a point till one hour completes

        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

    }, 1000
    // to run this function after every 1000ms 
);