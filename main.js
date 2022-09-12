let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let show_time = document.getElementById('show_time')
let day_show = document.getElementById('day_show');

function Updateclock() {



    let time = new Date;

    let saat = time.getHours();
    let dakika = time.getMinutes();
    let saniye = time.getSeconds();
    let twelve = saat - 12;



    if (saat < 12) {
        show_time.innerHTML = `${twelve}:${dakika}:${saniye}AM`;
    } else {
        show_time.innerHTML = `${twelve}:${dakika}:${saniye}PM`;
    }

    let day = time.getDay();
   
    switch (day) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;

        case 6:
            day = 'Saturday'
            break;
    }

    day_show.innerHTML = day;




}
Updateclock()
setInterval(Updateclock, 1000);
