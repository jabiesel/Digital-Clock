function displayTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let session = document.getElementById('session');
    let daysArr = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let days = daysArr[dateTime.getDay()];
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                    'September', 'October', 'November', 'December']
    let months = monthArr[dateTime.getMonth()];
    let date = dateTime.getDate().toString();
    let year = dateTime.getFullYear();


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('day').innerHTML = days + ',';
    document.getElementById('month').innerHTML = months;
    document.getElementById('date').innerHTML = date + ',';
    document.getElementById('year').innerHTML = year;
    

    if(hours >= 12){
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    // 12 hour format
    if(hours > 12){
        document.getElementById('hours').innerHTML = hours - 12;
    }

    // put zero if single digit for min/sec
    if(minutes < 10){
        document.getElementById('minutes').innerHTML =  '0' + minutes
    }

    if(seconds < 10){
        document.getElementById('seconds').innerHTML =  '0' + seconds
    }

    // ordinal number assigners
    if(date > 3 && date < 21){
        document.getElementById('date').innerHTML =  date + 'th'
    }
    
    if(date == 1 || date == 21 || date == 31){
        document.getElementById('date').innerHTML =  date + 'st'
    }

    if(date == 2 || date == 22){
        document.getElementById('date').innerHTML =  date + 'nd'
    }

    if(date == 3 || date == 23){
        document.getElementById('date').innerHTML =  date + 'rd'
    }

};

setInterval(displayTime, 10)