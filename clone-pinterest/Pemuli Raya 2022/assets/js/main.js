const countdown = () => {
    const countDate = new Date("Feb 8, 2022 09:00:00").getTime();
    // console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".hari").innerText = textDay;
    document.querySelector(".jam").innerText = textHour;
    document.querySelector(".menit").innerText = textMinute;
    document.querySelector(".detik").innerText = textSecond;
};

setInterval(countdown,1000);