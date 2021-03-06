var countDownDate = new Date("Jan 9, 2021 00:00:00").getTime();

var x = setInterval(function () {

    if (document.getElementById("countdown-card")) {

        var now = new Date().getTime();

        var distance = countDownDate - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("countdown-days").innerHTML = days + "d";
        document.getElementById("countdown-hours").innerHTML = hours + "h";
        document.getElementById("countdown-mins").innerHTML = minutes + "m";
        document.getElementById("countdown-secs").innerHTML = seconds + "s";
    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-days").innerHTML = "Competition Time!";
        }
    }

}, 1000);