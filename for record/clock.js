var hour = document.querySelector('.hour');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
window.setInterval(function() {

    let shijian = new Date();
    let shi = shijian.getHours() * 30;
    let fen = shijian.getMinutes() * 6;
    let miao = shijian.getSeconds() * 6;
    hour.style.transform = `translate(-50%,-50%) rotateZ(${shi+shijian.getMinutes()*0.5}deg)`;
    min.style.transform = `translate(-50%,-50%) rotateZ(${fen}deg)`;
    sec.style.transform = `translate(-50%,-50%) rotateZ(${miao}deg)`;

}, 1000)