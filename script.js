function clock() {
    // Setting Up The Current Date 
    var clock = new Date();

    // All Days and Month Names
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"];

    // Setting Up The Current Time Statistics
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    var month = months[clock.getMonth()];
    var date = clock.getDate();
    var year = clock.getFullYear();
    var day = days[clock.getDay()];
    if (hours < 12) {var period = "AM";} else {var period = "PM";}
    if (hours > 12) {hours = hours - 12;}  
    // Adding 0s to bring in professionalism
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    date = ("0" + date).slice(-2);
    // Updating the respective elements
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('period').textContent = period;
    document.getElementById('date').textContent = date;
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
    document.getElementById('year').textContent = year;
}
// Making the clock update every 1 second. (1000ms = 1 second)
setInterval(clock, 1000)